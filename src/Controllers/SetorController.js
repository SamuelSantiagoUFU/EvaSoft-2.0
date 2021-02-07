exports.list = (req, res, next) => {
    res.status(200).send("Setores!")
}

exports.cadastrar = (req, res, next) => {
    res.status(200).send("Novo Setor!")
}

exports.editar = (req, res, next) => {
    res.status(200).send(`ID: ${req.params.id}`)
}

exports.deletar = (req, res, next) => {
    res.status(200).send(`Setor Deletado! ${req.params.id}`)
}