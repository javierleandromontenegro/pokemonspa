const axios = require("axios")
const { Pokemon, Type } = require("../db")


const allApiPokemons = async () => {

  try {
    let arrInfo = []
    let arrUrl = []
    const bigPoke =  await axios.get("https://pokeapi.co/api/v2/pokemon?offset=0&limit=40");
    const pokeUrlName = bigPoke.data.results
    const pokeComplete = await axios.all(
      pokeUrlName.map(async (pokeInd) => {
        let infoPush = await axios.get(pokeInd.url);
        return {
          id: infoPush.data.id,
          name: infoPush.data.name,
          hp: infoPush.data.stats[0].base_stat,
          attack: infoPush.data.stats[1].base_stat,
          defense: infoPush.data.stats[2].base_stat,
          speed: infoPush.data.stats[5].base_stat, 
          height: infoPush.data.height,
          weight: infoPush.data.weight,
          image: infoPush.data.sprites.other.dream_world.front_default,
          types: infoPush.data.types.map((pk) => pk.type.name), 
        }
      })
    )
    return pokeComplete
  } catch (error) {
    console.log({ error : `Something is wrong with "allApiPokemons" located in controllers`})
  }
}

 const allDbPokemons = async () => {
       try { 
        const dbPoke = await Pokemon.findAll({
          include : Type,
       })  
          
        return dbPoke

       } catch (error) {
        console.log({error : "asas"})
       }
        
    }

    const allPokemon = async () => {
      try {
        const endApi = await allApiPokemons();
        const endDb = await allDbPokemons();
        const apiAndDb = endApi.concat(endDb);

        return apiAndDb
      }catch (error)
      {
        console.log({error : "Error in allPokemon"})
      }

    }

    const allTypes = async () => {
      try { 
        const dbTypes = await Type.findAll()
    
        if(dbTypes.length <= 0){
          const pokeInfo = await  allPokemon();
          const pokeTypes = pokeInfo.map((pktypes) => pktypes.types).flat();
          const dataArr = new Set(pokeTypes);
  
          let allTypes = [...dataArr];
          // console.log(allTypes) // ya tengo los types.
          allTypes.forEach((nameTypes) => {
              Type.findOrCreate({ where: { name: nameTypes } })
          })
  
         const dbApiTypes = await Type.findAll()
        
        }
        
      }catch (error) {
        console.log({error : "Error in allTypes"})

      }

    }




module.exports = {
  allApiPokemons,
  allDbPokemons,
  allPokemon,
  allTypes
}