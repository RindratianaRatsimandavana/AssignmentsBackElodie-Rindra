let mongoose = require('mongoose');
let Schema = mongoose.Schema;

let ContenuSchema = Schema({
    // _id: Number,
    id_assignment : Number,
    id_eleve : Number,
    commentaire: String,
    note: Number,
    reponse : String,
    dateRendu : Date
});

module.exports = mongoose.model('Contenus', ContenuSchema);