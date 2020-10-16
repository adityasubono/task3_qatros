const itemController = require('../controllers').item;

module.exports = (app) => {
    app.get('/api', (req, res) => res.status(200).send({
        message: 'Welcome to the Item API!',
    }));

    app.post('/api/item', itemController.create);
    app.get('/api/item', itemController.list);
    app.get('/api/item/:code', itemController.findByCode);
    app.get('/api/items/:name', itemController.findByName);
    app.put('/api/item/:code', itemController.update);
    app.delete('/api/item/:code', itemController.delete);
};
