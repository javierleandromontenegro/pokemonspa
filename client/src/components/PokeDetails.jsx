import React from "react";
import {useEffect, useState} from 'react';
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from 'react-redux';
import style from "./styles/PokeDetails.module.css"
import { pokeDetails, getPoke , clearId } from "../redux/actions/actions";
import Loading from "./Loading";
import pokedx from "../imgsGif/create4.png"
import pokedx3 from "../imgsGif/happy2.png"
import pokedx2 from "../imgsGif/hunter.png"


const PokeDetails = (props) => {
    let idParams = props.match.params.id;
    let finder = useSelector((state) => state.pokePermanent)
    let pokemon = useSelector((state) => state.pokeDetails)
    const dispatch = useDispatch()
    

    useEffect(() => {
        dispatch(pokeDetails(idParams));
    }, [dispatch , idParams])

    let clearHome =  ()=> {
        dispatch(clearId());
       
    }
    let colorCard 
    let cardColor = () =>{
          
        if(pokemon[0].types[0] == "grass" || pokemon[0].types[0] == "bug" || pokemon[0].types[0] == "poison"){
     return  style.green
       }
       if(pokemon[0].types[0]?.name == "grass" || pokemon[0].types[0]?.name == "bug" || pokemon[0].types[0]?.name == "poison"){
        return  style.green
          }
      if(pokemon[0].types[0] == "fire" || pokemon[0].types[0] == "flying" || pokemon[0].types[0] == "electric"){
     return  style.red
       }
       if(pokemon[0].types[0]?.name == "fire" || pokemon[0].types[0]?.name == "flying" || pokemon[0].types[0]?.name == "electric"){
        return  style.red
          }
     if(pokemon[0].types[0] == "normal" || pokemon[0].types[0] == "water" || pokemon[0].types[0] == "fairy" || pokemon[0].types[0] == "ground"){
     return  style.blue
       }
       if(pokemon[0].types[0]?.name == "normal" || pokemon[0].types[0]?.name == "water" || pokemon[0].types[0]?.name == "ground" || pokemon[0].types[0]?.name == "fairy"){
        return  style.blue
          }
        
    }


    let origins2 = pokemon[0]?.dbCreated ? 
        "This pokemon can become a danger to pokediversity. The decision is in your hands... you can set it free and see how it grows or you can hunt it down and send it to the lab to never see it again." 
        : "It's getting late, at night this area becomes dangerous because of the Pokethieves and the GHOST POKEMONS, let's go home"
    
   let origins = pokemon[0]?.dbCreated ? 
        "this pokemon is a successful experiment created by the user" 
        : "This pokemon is native to Pokeworld"

    let actitude = ""
    let eat = "" 
    let punch = "" 
    pokemon[0]?.dbCreated ?  pokemon[0].types.map((t) => {
    
     if(t.name == "grass" || t.name == "bug" || t.name == "poison") {
        actitude = "very peaceful and docile"
         eat = "they eat herbs, cardamoms are vital in their diet."
         punch = `have a hard time winning battles against fire pokemons  , but have an advantage over water pokemons `
        }
         
     if(t.name == "fire" || t.name == "flying" || t.name == "electric") {
        actitude = "very aggressive if they are scared"
         eat = "their diet is completely carnivorous, they are at the top of the food chain"
         punch = `have a hard time winning battles against water pokemons  , but have an advantage over normal pokemons `   
     }
     if(t.name == "normal" || t.name == "fairy" || t.name == "water" || t.name == "ground"){
        actitude = "very calm, they are always alert to flee"
        eat = "Their diet is varied, they are omnivores by nature, although depending on the conditions they can become vegetarians."
        punch = " do not have very marked advantages or disadvantages, they can fight on equal terms with any type"
    }
}
    ) : pokemon[0]?.types.map((t) => {
    
        if(t == "grass" || t == "bug" || t == "poison") {
           actitude = "very peaceful and docile"
            eat = "they eat herbs, cardamoms are vital in their diet."
            punch = `have a hard time winning battles against fire pokemons  , but have an advantage over water pokemons `
           }
            
        if(t == "fire" || t == "flying" || t == "electric") {
           actitude = "very aggressive if they are scared"
            eat = "their diet is completely carnivorous, they are at the top of the food chain"
            punch = `have a hard time winning battles against water pokemons  , but have an advantage over normal pokemons `   
        }
        if(t == "normal" || t == "fairy" || t == "water" || t == "ground"){
           actitude = "very calm, they are always alert to flee"
           eat = "Their diet is varied, they are omnivores by nature, although depending on the conditions they can become vegetarians."
           punch = " do not have very marked advantages or disadvantages, they can fight on equal terms with any type"
       }
   }
       )
     
    
    return (
        <div className={style.backgro}>
            
        { pokemon.length > 0  ? 
        <div className={style.presentation}>
            <img  className={style.portimage} src={pokedx}/>
            <h1 className={style.title}> Excellent we have arrived!!!  </h1>
            <p className={style.parraf}> This is a {pokemon[0].name} in the wild, they are {actitude} and {eat} Pro tips, they {punch}   </p>
        </div>
        : <div className={style.presentation}> 
            <div> </div>
            </div> } 
        <div className={style.backgro2}> 

      <div  > 
           {   pokemon.length > 0  ?

           <div className={cardColor()}>
            <div className={style.textCont}>
           
           <div className={style.stats}>Name: {pokemon[0].name.toUpperCase()} </div>
           <div className={style.stats}>Health: {pokemon[0].hp} </div>
           <div className={style.stats}>Attack: {pokemon[0].attack} </div>
           <div className={style.stats}>Defense: {pokemon[0].defense} </div>
           <div className={style.stats}>Speed: {pokemon[0].speed} </div>
           <div className={style.stats}>Height: {pokemon[0].height} </div>
           <div className={style.stats}>Weight: {pokemon[0].weight} </div>
           { pokemon[0].dbCreated ?  pokemon[0].types.map((l) => <div className={style.stats}> Type : {l.name} </div> )  
           : pokemon[0].types.map((l) => <div className={style.stats}> Type : {l}  </div>)}
           </div>
           <div className={style.imageCont}> 
           <img className={style.image} src={pokemon[0].image} />
           <div className={style.downimage} >Origins: {origins} </div>
           </div>
          
          
             </div>

         

           : <div className={style.loading}> <Loading/> 
           
           </div> }
     
    </div>
        </div>
           <div className={style.presentation2}> 
<img className={style.logos} src={pokedx2}/>
<img className={style.logos} src={pokedx2}/>
<img className={style.logos} src={pokedx2}/>
<img className={style.logos} src={pokedx2}/>
<h1 className={style.welc2}>  </h1>
<h3 className={style.welc3}> {origins2} </h3>
<div className={style.endbutton}>
      <Link to="/home"> 
      <button className={style.btnCreate} onClick={ () => clearHome() }> HOME!</button>
      </Link >
      {pokemon[0]?.dbCreated ?
      <Link to="/create"> 
      <button className={style.btnCreate} onClick={ () => clearHome() }> Hunt </button>
      </Link >
      : <></>
}
   
</div>
</div>
    </div>
)
}


export default PokeDetails