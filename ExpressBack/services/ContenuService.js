const Contenu = require('../model/Contenu');

class ContenuService {
    async getContenus() {
        try {
            const contenus = await Contenu.find();
            console.log(contenus);
            return contenus;
        } catch (error) {
            throw error;
        }
    }
    async getContenuByEleveByAssignment(idEleve, idAssignment) {
        try {
            const contenu = await Contenu.find({ id_eleve: idEleve, id_assignment: idAssignment });
            console.log("contenu by eleve: ");
            console.log(contenu);
            return contenu;
        } catch (err) {
            console.log(err)
            throw err;
        }
    }

    async getContenuByAssignment(idAssignment) {
        try {
            const contenu = await Contenu.find({ id_assignment: idAssignment });
            console.log("contenu by Assignment: ");
            console.log(contenu);
            return contenu;
        } catch (err) {
            console.log(err)
            throw err;
        }
    }

    async getContenuById(id) {
        try {
            const contenu = await Contenu.find({ _id: id });
            console.log("contenu by id: ");
            console.log(contenu);
            return contenu;
        } catch (err) {
            console.log(err)
            throw err;
        }
    }

    async updateContenu(id, updateData) {
        try {
            if (!id) {
                throw new Error('Missing id for update');
            }

            const updateContenu = await Contenu.findByIdAndUpdate(
                id,
                updateData,
                { new: true, runValidators: true }
            );

            if (!updateContenu) {
                throw new Error('Contenu not found or could not be updated');
            }

            console.log("Contenu updated:", updateContenu);
            return updateContenu;
        } catch (err) {
            console.error("Error updating contenu:", err);
            throw err;
        }
    }

    async updateContenuNote(id, newNote) {
        try {
            const result = await Contenu.updateOne(
                { _id: id },
                { $set: { note: newNote } }
            );
            if (result.nModified === 0) {
                throw new Error('No documents were updated');
            }
            console.log("Contenu updated Note:", result);
            return result;
        } catch (err) {
            console.log(err);
            throw err;
        }
    }

    async createContenu(data) {
        try {
            const contenu = new Contenu(data);
            await contenu.save();
            console.log("save contenu service")
            return contenu;
        } catch (err) {
            throw err;
        }
    }
}

module.exports = ContenuService;