let mongoose = require('mongoose');
let Schema = mongoose.Schema;

let AssignmentSchema = Schema({
    // _id: Number,
    titre: String,
    id_matiere : Number,
    id_promotion : Number,
    Description: String,
    upload_fichier: String,
    id_type_a_rendre : String,
    dateRendu : Date
});

module.exports = mongoose.model('Assignments', AssignmentSchema);