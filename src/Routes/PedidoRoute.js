const PedidoController = require('../Controllers/PedidoController')

module.exports = app => {
    app.get('/feriados', PedidoController.list)
    app.post('/feriado', PedidoController.cadastrar)
    app.delete('/feriado/:id', PedidoController.deletar)
}