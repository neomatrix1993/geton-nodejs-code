const Joi = require('@hapi/joi');

const typeEnums = {
    TEXT: 'text', // plain text
    MCQ: 'mcq', // multiple choice
    GRID: 'grid', // grid
    SCQ1: 'scq', // single choice question
    IMAGE: 'image', // image
    VIDEO: 'video'
};
Object.freeze(typeEnums);

const optionsSchema = Joi.object().keys({
    type: Joi.any().valid(typeEnums.TEXT, typeEnums.IMAGE).required(),
    value: Joi.string().required()
});

const mediaSchema = Joi.object().keys({
    type: Joi.any().valid(typeEnums.IMAGE, typeEnums.VIDEO).required(),
    value: Joi.string().required()
});

const questionSchema = Joi.object().keys({
    type: Joi.string().valid(Object.values(typeEnums)).required(),
    title: Joi.string().required(),
    media: Joi.array().items(mediaSchema),
    options: Joi.array().items(optionsSchema),
    grid: Joi.object().keys({
        rows: Joi.array().items(Joi.string()).required(),
        columns: Joi.array().items(Joi.string()).required(),
    })
});

const formSchema = Joi.object().keys({
    name: Joi.string().required(),
    questions: Joi.array().items(questionSchema)
});

function validateFormRequest(formData) {
    const {error, value} = Joi.validate(formData, formSchema);
    if (error) {
        console.log(error);
        throw new Error(error);
    }

    return value;
}

module.exports = {
    validateFormRequest: validateFormRequest,
    typeEnums: typeEnums
};