const Cargo = require('../Schemas/CargoSchema')

exports.list = (req, res, next) => {
    var cargoMap = {}
    Cargo.find({}, (err, cargos) => {
        cargos.forEach(c => {
            cargoMap[c.name] = c
        })

    })
        .then(() => res.status(200).send(cargoMap))
        .catch(() => res.status(404).send("Não encontrado"))

}

exports.cadastrar = (req, res, next) => {
    const doc = new Cargo()
    doc.name = req.body.name
    doc.permissions = req.body.permissions || [{
        user_page: ["r", "u"],
        initial_page: ["r"]
    }]
    doc.save().then(saveDoc => {
        res.status(201).send(saveDoc.toJSON())
    }).catch(err => {
        console.error(err)
        res.status(500).send("Erro")
    })
}

exports.editar = (req, res, next) => {
    Cargo.findByIdAndUpdate(req.params.id, req.body, null, (err, result) => {
        if (err)
            res.status(404).send(err)
        else
            res.status(200).send(result)
    })

}

exports.deletar = (req, res, next) => {
    res.status(200).send(`Cargo Deletado! ${req.params.id}`)
}