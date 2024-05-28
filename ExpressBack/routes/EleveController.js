const EleveService = require('../services/EleveService');

class EleveController {
    constructor() {
        this.EleveService = new EleveService();
    }

    getEleves = async (req, res) => {
        try {
            const eleves = await this.EleveService.getEleves();
            res.send(eleves);
        } catch (error) {
            error.status(500).send(error);

        }
    };

    getEleveById = async (req, res) => {
        try {
            const eleve = await this.EleveService.getEleveById(req.params.id);
            res.send(eleve);
        } catch (error) {
            res.status(500).send(error);
        }
    };

    createEleve = async (req, res) => {
        try {
            const newEleve = await this.EleveService.createEleve(req.body);
            res.status(201).send(newEleve);
        } catch (err) {
            console.log(err)
            res.status(500).send(err);
        }
    };
}

module.exports = EleveController;