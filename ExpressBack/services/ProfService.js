const Prof = require('../model/Prof');

class ProfService {
    async getProfs() {
        try {
            const profs = await Prof.find();
            console.log(profs);
            return profs;
        } catch (err) {
            throw err;
        }
    }

    async createProf(data) {
        try {
            const Prof = new Prof(data);
            await Prof.save();
            console.log("save Prof service")
            return Prof;
        } catch (err) {
            throw err;
        }
    }
}

module.exports = ProfService;
