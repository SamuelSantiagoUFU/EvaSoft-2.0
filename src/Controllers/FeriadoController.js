exports.list = (req, res, next) => {
    res.status(200).send("Feriados!")
}

exports.cadastrar = (req, res, next) => {
    res.status(200).send("Novo Feriado!")
}

exports.editar = (req, res, next) => {
    res.status(200).send(`ID: ${req.params.id}`)
}

exports.deletar = (req, res, next) => {
    res.status(200).send(`Feriado Deletado! ${req.params.id}`)
}