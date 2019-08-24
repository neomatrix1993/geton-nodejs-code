import express from 'express';
import formService from '../services/FormService'

const router = express.Router();

/* GET home page. */
router.get('/:id', function (req, res, next) {
    const id = req.params.id;
    res.send(formService.getForm(id));
});

router.post('/', function (req, res, next) {
    const body = req.body;
    formService.addForm({
        id: 1,
        data: body,
    });
    res.send({
        data: global.database,
    });
});

export default router;
