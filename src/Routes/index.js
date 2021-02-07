const FuncionarioRoute = require('./FuncionarioRoute')
const SetorRoute = require('./SetorRoute')
const CargoRoute = require('./CargoRoute')
const FeriadoRoute = require('./FeriadoRoute')
const SoftwareRoute = require('./SoftwareRoute')
const PedidoRoute = require('./PedidoRoute')

module.exports = app => {
    FuncionarioRoute(app)
    SetorRoute(app)
    CargoRoute(app)
    FeriadoRoute(app)
    SoftwareRoute(app)
    PedidoRoute(app)
}