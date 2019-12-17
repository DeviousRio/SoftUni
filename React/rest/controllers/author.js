const models = require('../models');

module.exports = {
    get: (req, res, next) => {
        models.Author.find()
            .then((author) => res.send(author))
            .catch(next);
    }
};