const jwt = require('jsonwebtoken');
const config = require('../config');

async function getProfOnLine() {
    try {
        const token = req.headers['x-access-token'];

        if (!token) {
            throw new Error('No token provided.');
        }

        const decoded = jwt.verify(token, config.secret);
        const prof = await this.ProfService.getProfById(decoded.id);

        if (!prof) {
            throw new Error('No user found.');
        }

        // Optionally, modify the prof object here if needed
        prof.mdp = 0;

        return prof;
    } catch (error) {
        throw error; // Propagate the error to the caller
    }
}

module.exports = { getProfOnLine };
