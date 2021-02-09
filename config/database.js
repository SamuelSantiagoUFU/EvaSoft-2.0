const mongoose = require('mongoose')

mongoose.connect('mongodb://localhost/evasoft', {useNewUrlParser: true, useUnifiedTopology: true})
const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
    console.log("> Conectado com o banco")
});

module.exports = {db, mongoose}