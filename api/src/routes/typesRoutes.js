const axios = require("axios")
const { Pokemon, Type } = require("../db")
const { Router } = require("express")
const { allPokemon } = require("../controllers/controllers") 
const router = Router()

router.get("/", async (req, res) => {
  try {
      const dbTypes = await Type.findAll()
    
      if(dbTypes.length <= 0){
        const pokeInfo = await  allPokemon();
        const pokeTypes = pokeInfo.map((pktypes) => pktypes.types).flat();
        const dataArr = new Set(pokeTypes);

        let allTypes = [...dataArr];
        console.log(allTypes) // ya tengo los types.
        allTypes.forEach((nameTypes) => {
            Type.findOrCreate({ where: { name: nameTypes } })
        })

       const dbApiTypes = await Type.findAll()
       
        res.status(200).json( dbApiTypes )
    }
    else {
        const allTheTypes = await Type.findAll()

        res.status(200).json(allTheTypes)
    }
  }catch (error) {
    res.status(400).send({error :error.message})
  }
})


module.exports = router