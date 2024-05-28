const ProfService = require('../services/ProfService');

class ProfController {
    constructor() {
        this.ProfService = new ProfService();
    }

    getProfs = async (req, res) => {
        try {
            const profs = await this.ProfService.getProfs();
            res.send(profs);
        } catch (error) {
            error.status(500).send(error);

        }
    };

    

    createProf = async (req, res) => {
        try {
            const newProf = await this.ProfService.createProf(req.body);
            res.status(201).send(newProf); 
        } catch (err) {
            console.log(err)
            res.status(500).send(err);
        }
    };
}

module.exports = ProfController;