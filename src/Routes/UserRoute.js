const UserController = require('../Controllers/UserController')

module.exports = app => {
    app.post('/login', UserController.login)
    app.post('/change_pass', UserController.mudarSenha)
}