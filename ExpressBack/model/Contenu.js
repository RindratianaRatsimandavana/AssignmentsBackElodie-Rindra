let mongoose = require('mongoose');
let Schema = mongoose.Schema;

let ContenuSchema = Schema({
    // _id: Number,
    id_assignment : String,
    id_eleve : Number,
    commentaire: String,
    note: Number,
    reponse : String,
    dateRendu : Date,
    siNote : Boolean
});

module.exports = mongoose.model('Contenus', ContenuSchema);