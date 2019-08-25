import formDao from '../dao/FormDao'

class FormService {
    constructor() {
        this.formDao = formDao;
    }

    async addForm(form) {
        try {
            return await this.formDao.saveForm(form);
        } catch (e) {
            console.error(e);
            throw new Error(`Error in saving form: ${e}`);
        }
    }

    async getForm(id) {
        try {
            return await this.formDao.getForm(id);
        } catch (e) {
            console.log(e);
            throw new Error(`Form not found for id: ${e}`);
        }
    }

    async getForms() {
        try {
            return await this.formDao.getForms();
        } catch (e) {
            console.log(e);
            throw new Error(`Error in getting forms : ${e}`);
        }
    }
}

module.exports = new FormService();