import axios from "axios";
import PokeCard from "../../components/PokeCard";

export const GET_POKE = "GET_POKE";
export const GET_POKEBYID = "GET_POKEBYID"
export const CLEAR_ID = "CLEAR_ID"
export const GET_BYNAME = "GET_BYNAME"
export const GET_INSTANT = "GET_INSTANT"
export const FILTER_DBAPI = "FILTER_DBAPI"
export const FILTER_TYPES = "FILTER_TYPES"
export const CLEAR_HOME = "CLEAR_HOME"
export const ORDER_NAME = "ORDER_NAME"
export const ORDER_ATTACK = "ORDER_ATTACK"
export const POKE_POST = "POKE_POST"
export const GET_TYPES = "GET_TYPES"

export function getPoke() {
  try {

    return async function (dispatch) {
      const pokedata = await axios.get("http://localhost:3001/pokemons")
      return dispatch({
        type: "GET_POKE",
        payload: pokedata.data
      })
    }
  }catch (error) {return {error : error.mesage }}
  }

export function getTypes () {
  return {
    type : GET_TYPES
  }
}

export function pokeDetails (id) {
try {

  return async function (dispatch) {
    const getDetails = await axios.get(`http://localhost:3001/pokemons/${id}`)
    console.log("holissss")
    return dispatch({
      type: "GET_POKEBYID",
      payload: getDetails.data
    })
  }
}catch (error){console.log("no bro, no existe ese pokemon")}
}


export const clearId = () =>{
  return {type: CLEAR_ID}
}

export const getByName = (name) =>{
  try {
    return async function (dispatch) {
      const getDetails = await axios.get(`http://localhost:3001/pokemons?name=${name}`)
      return dispatch({
          type : GET_BYNAME,
      payload : getDetails.data
    })
  }
  }catch (error) {return {error : error.mesage } }
  }


export const filterDbApi = (payload) => {
  return {
    type: FILTER_DBAPI,
    payload
  }
}
    
export const filterTypes = (payload) => {
  return {
    type: FILTER_TYPES,
    payload
  }
}

export const clearHome = () => {
  return {
    type : CLEAR_HOME,
  }
}

export const orderName = (payload) => {
  return {
    type: ORDER_NAME,
    payload
  }
}

export const orderAttack = (payload) => {
  return {
    type: ORDER_ATTACK,
    payload
  }
}



  export const createPk =  (pokemon) => {
    try {
        return async function(dispatch) {
          let payload = await axios.post('http://localhost:3001/pokemons', pokemon)
          
            return dispatch({
              type : POKE_POST,
              payload
            })
        }
    } catch (error) {
      return {error : error.mesage }
    }
}; 