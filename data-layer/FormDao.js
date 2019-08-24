// init a empty dictionary storing formId, formData as k,v
let data = {};

class FormDao {
    saveForm(form) {
        data[form.id] = form;
        global.database.push(form);
        console.log(`local data + ${data}`);
        console.log(`global database + ${global.database}`);
    }

    getForm(id) {
        return data[id]
    }
}

const formDao = new FormDao();

export default formDao;