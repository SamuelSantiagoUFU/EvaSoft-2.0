const FuncionarioController = require('../Controllers/FuncionarioController')

module.exports = app => {
    app.post('/login', FuncionarioController.login)
    app.get('/funcionarios', FuncionarioController.list)
    app.post('/funcionario', FuncionarioController.cadastrar)
    app.post('/funcionario/reset', FuncionarioController.mudarSenha)
    app.route('/funcionario/:cod')
        .patch(FuncionarioController.editar)
        .delete(FuncionarioController.desativar)
        .post(FuncionarioController.reativar)
}