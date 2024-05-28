let mongoose = require('mongoose');
let Schema = mongoose.Schema;

let PromotionSchema = Schema({
    // _id: Number,
    intitule : String,
    id_classe : Number
});

module.exports = mongoose.model('Promotions', PromotionSchema);
