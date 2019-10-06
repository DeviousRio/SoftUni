// TODO: Require Controllers...
const cubeController = require('../controllers/cube');
const accessoryController = require('../controllers/accessory');

module.exports = (app) => {
    // Accessory controller
    app.get('/create/accessory', accessoryController.createGet);
    app.post('/create/accessory', accessoryController.createPost);
    app.get('/attach/accessory/:id', accessoryController.attachGet);
    app.post('/attach/accessory/:id', accessoryController.attachPost);

    // Cube controller
    app.get('/details/:id', cubeController.details);
    app.get('/about', cubeController.about);
    app.get('/not-found', cubeController.notFound);
    app.get('/create', cubeController.getCreate)
    app.post('/create', cubeController.postCreate);
    app.get('/', cubeController.index);
};