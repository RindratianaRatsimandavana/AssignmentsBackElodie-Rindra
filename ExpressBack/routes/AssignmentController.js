const AssignmentService = require('../services/AssignmentService');

class AssignmentController {
    constructor() {
        this.AssignmentService = new AssignmentService();
    }

    getAssignments = async (req, res) => {
        try {
            const assignments = await this.AssignmentService.getAssignments();
            res.send(assignments);
        } catch (error) {
            error.status(500).send(error);

        }
    };

    getAssignmentByMatiere = async (req, res) => {
        try {
            const assignments = await this.AssignmentService.getAssignmentByMatierer(req.params.id_matiere);
            res.send(assignments);
        } catch (error) {
            res.status(500).send(error);
        }
    };

    getAssignmentByPromotion = async (req, res) => {
        try {
            const assignments = await this.AssignmentService.getAssignmentByPromotion(req.params.id_promotion);
            res.send(assignments);
        } catch (error) {
            res.status(500).send(error);
        }
    };

    updateAssignment = async (req, res) => {
        try {
            const { id } = req.params;
            const updateData = req.body;
            const updatedAssignment = await this.AssignmentService.updateAssignment(id, updateData);
            res.send(updatedAssignment);
        } catch (error) {
            res.status(500).send(error);
        }
    };

    createAssignment = async (req, res) => {
        try {
            console.log("Titre " + req.body.titre);
            const newAssignment = await this.AssignmentService.createAssignment(req.body);
            res.status(201).send(newAssignment);
        } catch (err) {
            console.log(err)
            res.status(500).send(err);
        }
    };
}

module.exports = AssignmentController;