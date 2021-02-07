exports.login = (req, res, next) => {
    res.status(200).send("Logado com sucesso")
}

exports.mudarSenha = (req, res, next) => {
    res.status(200).send("Senha atualizada com sucesso!")
}

exports.list = (req, res, next) => {
    res.status(200).send("Funcionarios!")
}

exports.cadastrar = (req, res, next) => {
    res.status(200).send("Novo funcionario!")
}

exports.editar = (req, res, next) => {
    res.status(200).send(`ID: ${req.params.cod}`)
}

exports.desativar = (req, res, next) => {
    res.status(200).send("Funcionario Desativado!")
}

exports.reativar = (req, res, next) => {
    res.status(200).send(`Funcionario Reativado: ${req.params.cod}`)
}