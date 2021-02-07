const FuncionarioRoute = require('./FuncionarioRoute')
const SetorRoute = require('./SetorRoute')

module.exports = app => {
    FuncionarioRoute(app)
    SetorRoute(app)
}