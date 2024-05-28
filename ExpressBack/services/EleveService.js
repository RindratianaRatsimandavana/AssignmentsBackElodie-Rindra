const Eleve = require('../model/Eleve');

class EleveService {
    async getEleves() {
        try {
            const eleves = await Eleve.find();
            console.log(eleves);
            return eleves;
        } catch (err) {
            throw err;
        }
    }

    async getEleveByPromotion(idPromotion) {
        try {
            const eleves = await Eleve.find({ id_promotion: idPromotion });
            console.log("Eleve by PROMOTION: ");
            console.log(eleves);
            return eleves;
        } catch (err) {
            console.log(err)
            throw err;
        }
    }

    async getEleveById(id) {
        try {
            const eleve = await Eleve.find({ _id: id });
            console.log("Eleve by ID: ");
            console.log(eleve);
            return eleve;
        } catch (err) {
            console.log(err)
            throw err;
        }
    }

    async createEleve(data) {
        try {
            const Eleve = new Eleve(data);
            await Eleve.save();
            console.log("save Eleve service")
            return Eleve;
        } catch (err) {
            throw err;
        }
    }
}

module.exports = EleveService;
