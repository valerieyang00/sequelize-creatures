const db = require("./models")

const dinoCRUD = async () => {
    try {
        // Create
    // const newDino = await db.dino.create({
    //     name: "Petrie",
    //     type:"pteranodon"
    // })

    // // Find or Create
    // const [dino, created] = await db.dino.findOrCreate({
    //     where: {
    //         name: "Spike"
    //     },
    //     defaults: {
    //         type: "stegosaurus"
    //     }
    // })
        //READ
    //Find All
    // const findAll = await db.dino.findAll()
    // console.log(findAll)
    //Find One
    // const findOne = await db.dino.findOne({
    //     where: {
    //         name: "Ducky"
    //     }
    // })
    // console.log(findOne)
        //Update
    // const numRowsUpdated = await db.dino.update({
    //     type: "saurolophus"}, {
    //     where: {
    //         name: "Ducky"
    //     }
    // })
    // console.log(numRowsUpdated)
        //Destroy
    
    // const numRowsDeleted = await db.dino.destroy({
    //     where: {
    //         name: "Ducky"
    //     }
    // })
    // console.log(numRowsDeleted)
    console.log("dinoCRUD done")

    } catch(err) {
        console.warn(err)
    }
}

dinoCRUD()

const creatureCRUD = async () => {
    try {
        // Create
    // const newCreature = await db.creature.create({
    //     img_url: "https://cdn-images-1.medium.com/max/1200/1*a2VvYsKGApR-E1SnT5O7yQ.jpeg",
    //     type:"mastodon"
    // })

    // // Find or Create
    // const [creature, created] = await db.creature.findOrCreate({
    //     where: {
    //         type: "megalonyx"
    //     },
    //     defaults: {
    //         img_url: "https://animalgeography.files.wordpress.com/2018/08/sloth-banner-e1535192925361.jpg?w=584&h=325"
    //     }
    // })
        //READ
    //Find All
    // const findAll = await db.creature.findAll()
    // console.log(findAll)
    //Find One
    // const findOne = await db.creature.findOne({
    //     where: {
    //         type: "megalonyx"
    //     }
    // })
    // console.log(findOne)
        //Update
    // const numRowsUpdated = await db.creature.update({
    //     type: "giant beaver"}, {
    //         where: {
    //     img_url: "http://www.beringia.com/sites/default/files/Giant-Beaver-banner.jpg"
    //     }
    // })
    // console.log(numRowsUpdated)
        //Destroy
    
    // const numRowsDeleted = await db.creature.destroy({
    //     where: {
    //         type: "giant beaver"
    //     }
    // })
    // console.log(numRowsDeleted)
    console.log("creatureCRUD done")

    } catch(err) {
        console.warn(err)
    }
}

creatureCRUD()
