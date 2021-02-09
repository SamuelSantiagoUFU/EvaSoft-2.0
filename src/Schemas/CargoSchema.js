const mongoose = require('../../config/database').mongoose

const Schema = mongoose.Schema

const CargoSchema = new Schema({
    name: String,
    permissions: []
}, {versionKey: false})

module.exports = mongoose.model('cargos', CargoSchema)