import React from "react";
import {useEffect, useState} from 'react';
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from 'react-redux';
import { orderAttack, getPoke , filterDbApi , clearHome, filterTypes, orderName } from "../redux/actions/actions";
import styles from "./styles/FiltersPk.module.css"

const FiltersPk = ({handlePage}) => {


    let pkPermanent = useSelector((state) => state.pokePermanent) //este creo esta de mas 
    let allThePoke = useSelector((state) => state.pokemons)
    const dispatch = useDispatch()
    
    let apiPoke = allThePoke.filter((el) => el.dbCreated? false : true)

    let handlerFilter =  (e) => {
      handlePage("z")
      dispatch(filterDbApi(e.target.value))
  }

  let handlerType = (e) => {
    handlePage("z")
   dispatch(filterTypes(e.target.value))
  }

  let handleClearFilter = () => {
    handlePage("z")
   dispatch(clearHome())
  }

  let handlerName = (e) => {
    handlePage("z")
   dispatch(orderName(e.target.value))
  }

  let handlerAttack = (e) => {
    handlePage("z")
   dispatch(orderAttack(e.target.value))
  }
 return (
   <div>

   <select  className={styles.select1} onChange={handlerFilter}>
     <option value="all">Select one Poke-Origin</option>
     <option value="Api">Natural Pokemon's</option>
     <option value="Created">Experimental Pokemon's</option>
   </select>

   <select className={styles.select1} onChange={handlerType}>
     <option value="all">Select one Poke-Type </option>
     <option value="fire">Fire</option>
     <option value="normal">Normal</option>
     <option value="ground">Ground</option>
     <option value="fairy">Fairy</option>
     <option value="electric">Electric</option>
     <option value="grass">Grass</option>
     <option value="poison">Poison</option>
     <option value="flying">Flying</option>
     <option value="water">Water</option>
     <option value="bug">Bug</option>
   </select>

   <select className={styles.select1} onChange={handlerName}>
     <option disabled selected >Order pokemon </option>
     <option value="asc">A-Z Order </option>
     <option value="desc">Z-A Order</option>
   </select>

   <select className={styles.select1} onChange={handlerAttack}>
     <option disabled selected >Order Attack </option>
     <option value="desc"> Powerful </option>
     <option value="asc"> Weak </option>
   </select>


   <button className={styles.nigth} onClick={handleClearFilter}> Reset all Filters</button>
   </div>
        

 )
}

export default FiltersPk