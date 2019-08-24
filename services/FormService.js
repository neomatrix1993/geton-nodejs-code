import formDao from '../data-layer/FormDao'

class FormService {
    constructor() {
        this.formDao = formDao;
    }

    addForm(form) {
        // business / transfolmation, validation
        this.formDao.saveForm(form);
    }

    getForm(id) {
        this.formDao.getForm(id);
    }
}

export default new FormService();