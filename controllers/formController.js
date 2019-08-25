const formService = require('../services/FormService');
const validateFormRequest = require('../validator/formValidator').validateFormRequest;

/**
 * Get form details from by passing form id in url params
 * @param req
 * @param res
 * @returns {Promise<void>}
 */
exports.getForm = async function (req, res) {
    try {
        let result = await formService.getForm(req.params.id);
        return res.send(result);
    } catch (e) {
        return res.status(404).send({error: e.stack});
    }
};

/**
 * Get all forms
 * @param req
 * @param res
 * @returns {Promise<void>}
 */
exports.getForms = async function (req, res) {
    try {
        let forms = await formService.getForms();
        return res.status(200).send(forms);
    } catch (e) {
        console.log('No documents found' + e);
        return res.status(404).send({error: e.stack});
    }
};

/**
 * Controller function to add form. Does validation and delegate to service layer.
 * @param req
 * @param res
 * @returns {Promise<void>}
 */
exports.addForm = async function (req, res) {
    const body = req.body;
    let validatedBody;
    try {
        validatedBody = validateFormRequest(body);
    } catch (e) {
        return res.status(400).send({error: e.stack})
    }
    try {
        const result = await formService.addForm({data: validatedBody});
        return res.send(result);
    } catch (e) {
        return res.status(500).send({error: e.stack})
    }
};