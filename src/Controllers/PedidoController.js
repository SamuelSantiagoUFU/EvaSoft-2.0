exports.list = (req, res, next) => {
    res.status(200).send("Pedidos!")
}

exports.cadastrar = (req, res, next) => {
    res.status(200).send("Novo pedido!")
}

exports.deletar = (req, res, next) => {
    res.status(200).send(`Pedido Deletado! ${req.params.id}`)
}