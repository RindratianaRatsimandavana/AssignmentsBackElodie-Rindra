const AssignmentService = require('../services/AssignmentService');
const EleveService = require('../services/EleveService');
const {getProf} = require('../utile/profOnline');
const {sendMail} = require('../utile/sendMail')


class AssignmentController {
    constructor() {
        this.AssignmentService = new AssignmentService();
        this.EleveService = new EleveService();
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
            
            // Obtenir les adresses e-mail des élèves par promotion
            const mail = await this.EleveService.getEmailEleveByPromotion(req.body.id_promotion);
            
            // Obtenir l'adresse e-mail du professeur en ligne
            const profMail = await getProf();
            
            // Créer la nouvelle assignment
            const newAssignment = await this.AssignmentService.createAssignment(req.body);
            
            // Envoyer un e-mail au professeur avec les détails de l'assignment
            await sendMail(profMail, mail);

            res.status(201).send(newAssignment); // Répondre avec la nouvelle assignment créée
        } catch (err) {
            console.log(err);
            res.status(500).send(err); // Gérer les erreurs et répondre avec un code d'erreur approprié
        }
    };
}

module.exports = AssignmentController;