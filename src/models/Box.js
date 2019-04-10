const mongoose = require('mongoose')

const Box = new mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    files: [{ type: mongoose.Schema.Types.ObjectId, ref: "File" }]
}, {
    timestamps: true // cria um campo com a data de criação do registro e outro campo para controlar a data de atualização do registro.
});

module.exports = mongoose.model("Box", Box)