const FeriadoController = require('../Controllers/FeriadoController')

module.exports = app => {
    app.get('/feriados', FeriadoController.list)
    app.post('/feriado', FeriadoController.cadastrar)
    app.route('/feriado/:id')
        .patch(FeriadoController.editar)
        .delete(FeriadoController.deletar)
}