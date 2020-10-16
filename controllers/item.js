const Item = require('../models').Item;
var Sequelize = require('sequelize');
const Op = Sequelize.Op;

module.exports = {
    async create(req, res) {
        const item = await Item.findOne({where: {name: req.body.name}});
        if (item) {
            res.status(400).send({
                message: "Name is already exist"
            });
            return;
        }
        var number = (Math.random()+' ').substring(2,8)+(Math.random()+' ').substring(2,8);
        return Item
            .create({
                code : number,
                name: req.body.name,
                description: req.body.description
            })
            .then(
                item => {
                    res.status(201).send(item)
                })
            .catch(error => res.status(400).send(error));
    },
    list(req, res) {
        return Item
            .findAll()
            .then(item => res.status(200).send(item))
            .catch(error => res.status(400).send(error));
    },
    findByCode(req, res) {
        return Item
            .findOne({where: {code: req.params.code}})
            .then(item => {
                if (!item) {
                    return res.status(404).send({
                        message: 'Item Not Found',
                    });
                }
                return res.status(200).send(item);
            })
            .catch(error => res.status(400).send(error));
    },
    findByName(req, res) {
        return Item
            .findAll({where: {name:
                        {
                            [Op.like]: '%'+ req.params.name + '%'
                        }}})
            .then(item => {
                if (!item) {
                    return res.status(404).send({
                        message: 'Item Not Found',
                    });
                }
                return res.status(200).send(item);
            })
            .catch(error => res.status(400).send(error));
    },
    async update(req, res) {
        const code = req.params.code;
        await Item
            .update({
                name : req.body.name,
                description: req.body.description
            },{
                where: { code: code }
            })
            .then(item => {
                    res.send({
                        message: "Item was updated successfully."
                    });
                })
            .catch((error) => res.status(400).send(error));
    },
    delete(req,res){
        const code = req.params.code;
        return Item
            .destroy({
                where: { code: code }
            })
            .then(item => {
                if (item === 1) {
                    res.send({
                        message: "Item was deleted successfully!"
                    });
                } else {
                    res.send({
                        message: `Cannot delete Item with code=${code}. Maybe Item was not found!`
                    });
                }
            })
            .catch(err => {
                res.status(500).send({
                    message: "Could not delete Item with code=" + code
                });
            })
    }
};
