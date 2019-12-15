const models = require('../models');

module.exports = {
    get: (req, res, next) => {
        models.Book.find()
            .then((books) => res.send(books))
            .catch(next);
    }
};