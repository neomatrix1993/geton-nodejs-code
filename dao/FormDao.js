const FormModel = require('../models/formModel');

class FormDao {

    saveForm(formData) {
        let formModel = new FormModel(formData.data);
        return formModel.save()
    }

    getForm(id) {
        return FormModel.findById(id);
    }

    getForms() {
        return FormModel.find()
            .sort({name: 1})
            .exec()
    }
}

export default new FormDao();