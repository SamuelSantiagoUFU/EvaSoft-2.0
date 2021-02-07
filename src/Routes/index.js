const FuncionarioRoute = require('./FuncionarioRoute')
const SetorRoute = require('./SetorRoute')
const CargoRoute = require('./CargoRoute')

module.exports = app => {
    FuncionarioRoute(app)
    SetorRoute(app)
    CargoRoute(app)
}