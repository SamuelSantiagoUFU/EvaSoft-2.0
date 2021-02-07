const SoftwareController = require('../Controllers/SoftwareController')

module.exports = app => {
    app.get('/softwares', SoftwareController.list)
    app.post('/software', SoftwareController.cadastrar)
    app.route('/software/:id')
        .patch(SoftwareController.editar)
        .delete(SoftwareController.deletar)
}