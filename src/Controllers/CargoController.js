exports.list = (req, res, next) => {
    res.status(200).send("Cargos!")
}

exports.cadastrar = (req, res, next) => {
    res.status(200).send("Novo Cargo!")
}

exports.editar = (req, res, next) => {
    res.status(200).send(`ID: ${req.params.id}`)
}

exports.deletar = (req, res, next) => {
    res.status(200).send(`Cargo Deletado! ${req.params.id}`)
}