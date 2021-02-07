const SetorController = require('../Controllers/SetorController')

module.exports = app => {
    app.get('/setores', SetorController.list)
    app.post('/setor', SetorController.cadastrar)
    app.route('/setor/:id')
        .patch(SetorController.editar)
        .delete(SetorController.deletar)
}