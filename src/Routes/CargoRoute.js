const CargoController = require('../Controllers/CargoController')

module.exports = app => {
    app.get('/cargos', CargoController.list)
    app.post('/cargo', CargoController.cadastrar)
    app.route('/cargo/:id')
        .patch(CargoController.editar)
        .delete(CargoController.deletar)
}