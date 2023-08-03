const {db} = require('../db/connection.js');
const Pokemon = require('./model.js');

async function main() {
    await db.sync({force: true});
    // CREATE

    const createPokemon = await Pokemon.create({
        name: "Chimpchar",
        type: "Fire",
        weight: 7
    });
    // console.log(JSON.stringify(createPokemon, null, 2));
    // CREATE MANY
    const createMany = await Pokemon.bulkCreate([{
        name: "Charmander",
        type: "Fire",
        weight: 5
    },
    {
        name: "Cyndaquil",
        type: "Fire",
        weight: 3
    },
    {
        name: 'Torchic',
        type: 'Fire',
        weight: 7
    }]);
    // console.log(createMany, null, 2);

    // READ
    const currentPokemon = await Pokemon.findOne({where: {name: "Torchic"}});
    // console.log(JSON.stringify(currentPokemon, null, 2));
    const findByID = await Pokemon.findByPk(2);
    // console.log(JSON.stringify(findByID, null, 2));
    const findAll = await Pokemon.findAll();
    // console.log(JSON.stringify(findAll, null, 2));

    // UPDATE
    const updatePokemon = await Pokemon.update({
        name: "Charmelion",
        type: "Fire",
        weight: 13
    }, {where: {id: 2}});
    // console.log(updatePokemon, null, 2);

    // DELETE
    const deletePokemon = await Pokemon.destroy({where: {weight: 3}});
    console.log(JSON.stringify(deletePokemon, null, 2));

}

main();
