const controllers = require('../controllers');
const router = require('express').Router();

router.get('/', controllers.author.get);

module.exports = router;