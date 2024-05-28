const ContenuService = require('../services/ContenuService');

class ContenuController {
    constructor() {
        this.ContenuService = new ContenuService();
    }

    getContenus = async (req, res) => {
        try {
            const contenus = await this.ContenuService.getContenus();
            res.send(contenus);
        } catch (err) {
            res.status(500).send(err);
        }
    };

    getContenuByEleveByAssignment = async (req, res) => {
        try {
            console.log(req.params.id_eleve)
            console.log(req.params.id_assignment)

            const contenu = await this.ContenuService.getContenuByEleveByAssignment(req.params.id_eleve, req.params.id_assignment);
            res.send(contenu);
        } catch (error) {
            res.status(500).send(error);
        }
    };

    getContenuByAssignment = async (req, res) => {
        try {
            console.log(req.params.id_assignment)

            const contenu = await this.ContenuService.getContenuByAssignment(req.params.id_assignment);
            res.send(contenu);
        } catch (error) {
            res.status(500).send(error);
        }
    };

    getContenuById = async (req, res) => {
        try {
            const contenu = await this.ContenuService.getContenuById(req.params.id);
            res.send(contenu);
        } catch (error) {
            res.status(500).send(error);
        }
    };


    updateContenu = async (req, res) => {
        try {
            const { id } = req.params;
            const updateData = req.body;
            console.log(updateData)
            const updatedContenu = await this.ContenuService.updateContenu(id, updateData);
            res.send(updatedContenu);
        } catch (error) {
            console.log(error)
            res.status(500).send(error);
        }
    };

    updateContenuNote = async (req, res) => {
        try {
            const id = req.params.id;
            const updateData = req.body.note;
            console.log(updateData)
            const updatedContenu = await this.ContenuService.updateContenuNote(id, updateData);
            res.send(updatedContenu);
        } catch (error) {
            console.log(error)
            res.status(500).send(error);
        }
    };

    createContenu = async (req, res) => {
        try {
            // console.log("Titre " + req.body.titre);
            req.body.note = 0;
            const newConetnu = await this.ContenuService.createContenu(req.body);
            res.status(201).send(newConetnu);
        } catch (err) {
            console.log(err)
            res.status(500).send(err);
        }
    };


}

module.exports = ContenuController;
