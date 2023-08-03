const {Sequelize, DataTypes, Model} = require('sequelize');
const path = require('path');

const db = new Sequelize({
    dialect:'sqlite',
    storage: path.join(__dirname, 'db.sqlite'),
    logging: true
});

module.exports = {db, DataTypes, Model};