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