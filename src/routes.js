const express = require('express');
const router = express.Router();

const controller = require('./controllers/controller');

router.get('/carros', controller.buscarTodos);
router.get('/carro/:codigo', controller.buscarUm);
router.post('/carro', controller.inserir);
router.put('/carro/:codigo', controller.alterar);
router.delete('/carro/:codigo', controller.excluir);


module.exports = router;