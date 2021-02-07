exports.login = (req, res, next) => {
    res.status(200).send("Logado com sucesso")
}

exports.mudarSenha = (req, res, next) => {
    res.status(200).send("Senha atualizada com sucesso!")
}
