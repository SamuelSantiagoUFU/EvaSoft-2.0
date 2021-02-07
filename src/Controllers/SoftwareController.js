exports.list = (req, res, next) => {
    res.status(200).send("Softwares!")
}

exports.cadastrar = (req, res, next) => {
    res.status(200).send("Novo Software!")
}

exports.editar = (req, res, next) => {
    res.status(200).send(`ID: ${req.params.id}`)
}

exports.deletar = (req, res, next) => {
    res.status(200).send(`Software Deletado! ${req.params.id}`)
}