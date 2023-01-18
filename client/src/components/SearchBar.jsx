import React from "react";
import {useEffect, useState} from 'react';
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from 'react-redux';
import style from "./styles/SearchBar.module.css"
import { pokeDetails, getPoke , clearHome , getByName } from "../redux/actions/actions";


const SearchBar = () => {
    let [input , setInput] = useState("")
    let pkPermanent = useSelector((state) => state.pokePermanent)
    let allThePoke = useSelector((state) => state.pokemons)
    let searchCrash = useSelector((state) => state.pokeFilters)
    const dispatch = useDispatch()
    
    
    
    
    
      
    let handlerChange = (e) => {
        setInput(e.target.value);
    } 
   
    let handleSubmit = (e) => {
        dispatch(clearHome())
        e.preventDefault();
        let disAndSet = (input) => { dispatch(getByName(input))
            setInput('');
        }
        let pkFind = pkPermanent.filter(pk => pk.name ==input);
        pkFind.length > 0 ?  disAndSet(input) : alert("no ")
        
        
      
    }

return (
<div className={style.search}>
    <form onSubmit={handleSubmit}>
        <input
        className={style.barr}
        onChange={handlerChange}
        type="text" 
        value={ input }
        placeholder="Pokemon name..."
        onClick={()=>  setInput('')}
        /> 
       <button className={style.btn}type="submit"> Search! </button>
        <label> 🔎 </label>
       
       
       
        
    </form>

    
</div>

)



}

export default SearchBar



