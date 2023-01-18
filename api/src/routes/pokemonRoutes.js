const axios = require("axios")
const { Pokemon, Type } = require("../db")
const { Router, response } = require("express")
const { allPokemon , allTypes} = require("../controllers/controllers") 
const router = Router()

router.get("/" , async (req, res) => {
try {
    const { name } = req.query
    const pokeList = await allPokemon();
       if(name){
       const selectedPoke = await pokeList.filter(( obj ) =>  obj.name == name );
        if(selectedPoke.length > 0) {
            res.status(200).json(selectedPoke)
            }
         else {
            res.status(400).send("The name entered does not correspond to an existing pokemon")
              }

         } else {
           res.status(200).json(pokeList)
          }

}catch (error) {res.status(400).json({error : error.message })}
});


router.get("/:id" , async ( req, res) => {
    try {
        const { id } = req.params
        const pokeList = await allPokemon();
           if(id){
          const  selectedPoke = await pokeList.filter(( obj ) =>  obj.id == id );
            if(selectedPoke.length > 0) {
                res.status(200).json(selectedPoke)
                }
             else {
                res.status(400).send("The id entered does not correspond to an existing pokemon")
                  }
                }
                 
    }catch (error) {res.status(400).json({error : error.message })}
    });
    
    router.post("/" , async (req, res) => {
        try {
            const { name , hp , attack , defense , speed , height , weight , image ,types} = req.body 
            const pokeList = await allPokemon();
            await allTypes();
            const  selectedPoke = await pokeList.filter(( obj ) =>  obj.name == name );
            if(types.length == 0) { throw new Error("You need at least one type")}
            if(name.length <= 3) { throw new Error("the name must have more than 3 characters")}
            if(selectedPoke.length > 0) {
                res.status(400).send("There is already a pokemon with that name")
                                        }
            else {                 
            const jane = await Pokemon.create({ name, hp , attack , defense, speed, height, weight , image});
            
            let types1 = types[0]
            let types2 = types[1]
              const dbTypes =  await Type.findAll({
                where: { name: types1},
              });
              jane.addType(dbTypes);
              if(types.length == 2 ){
              const dbTypes1 = await Type.findAll({
                where: { name: types2},
              });
              jane.addType(dbTypes1);
            }
               
             res.status(200).json(jane);
            }
          
          
           
        }catch (error) {
                res.status(400).json({error : error.message})
        }

    })

module.exports = router