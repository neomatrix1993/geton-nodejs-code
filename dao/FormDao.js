const FormModel = require('../models/form').Model;

class FormDao {

    saveForm(formData) {
        // this.data[form.id] = form.data;
        let formModel = new FormModel(formData.data);
        return formModel.save()
    }

    getForm(id) {
        return FormModel.findById(id);
    }

    getForms() {
        return FormModel.find()
            .limit(10)
            .sort({name: 1})
            .exec()
    }

    updateGlobalDB() {
        global.database['questions'] = data;
    }
}

export default new FormDao();