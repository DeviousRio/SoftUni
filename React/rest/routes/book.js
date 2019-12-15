const controllers = require('../controllers');
const router = require('express').Router();

router.get('/', controllers.book.get);

module.exports = router;