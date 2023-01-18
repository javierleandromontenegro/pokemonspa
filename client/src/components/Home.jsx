import React from "react";
import {useEffect, useState} from 'react';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { getPoke } from "../redux/actions/actions";
import Loading from "../components/Loading"
import PokeCard from "./PokeCard";
import SearchBar from "./SearchBar";
import FiltersPk from "./FiltersPk";
import NotFound from "./NotFound";
import style from "./styles/Home.module.css"
import Pagination from "./Paginating";
import logo from "../imgsGif/happy1.png"
import errorImg from "../imgsGif/error1.png"

const Home = () => {
    let pokeFull = useSelector((state) => state.pokePermanent)
    let allThePoke = useSelector((state) => state.pokemons)
    let pokeFilters = useSelector((state) => state.pokeFilters)
    let typeState = useSelector((state) => state.pokeTypes)
    const dispatch = useDispatch()
    
  
    const [actualPage, setActualPage] = useState(0)
    const [nextPage , setNextPage] = useState(12)
    const [noche ,  setNoche] = useState("diadia")
    let lanoche = "diadia" 
    const modonoche = () => {
      setNoche("nochenoche")
       
    }
    const mododia =() => {
        setNoche("diadia")
    }


    const handlePrevNext = (e) => {
        // if(allThePoke.length < 5) {
        //     setActualPage(0)
        //     setNextPage(0)
        // }
        let pokeCounter = allThePoke.length 
        for (let i = 0; i < pokeCounter; i++) {
            if(e.target.name == "prev"){
            if(actualPage == 0) { return}
            
            if(actualPage == i) {
                
                
                setActualPage(actualPage -12)
                setNextPage(nextPage -12)
            
        }
    }
    else {
        let nextPoke
        if (pokeFilters.length > 0 ){  nextPoke = pokeFilters.length }
        else {  nextPoke = pokeFull.length} 
        if(nextPage > nextPoke) { return }
        if(nextPage == i){
            setActualPage(actualPage +12)
            setNextPage(nextPage +12)
        }
    }
    }}

    

    const handlePage = (n) => {
        let pokeCounter = Math.ceil(pokeFull.length / 12)
        console.log(pokeCounter)
        if(n == "z") {setActualPage(0)
            setNextPage( 12)}
        for(let i = 0 ;  i < pokeCounter +1; i++){
            if(n == i){
                console.log("holas")
                setActualPage( (n * 12) -12)
                setNextPage( (n * 12))
            }
        }
    
    
    
    
    }
    
    useEffect(() => {
        dispatch(getPoke())
            }, [dispatch])

return (
    <div className={style[noche]}> 
    <div className={style.presentation}> 
    <img className={style.logos} src={logo}/>
    <h1 className={style.welc}> Welcome to your pokedex </h1>
    <h3 className={style.welc}> You can search and look at the pokemons. Click on their description to catch them</h3>
    <div>
    <button onClick={modonoche} className={style.nigth}> Night</button>
    <button onClick={mododia} className={style.nigth}> Day </button>
    </div>
    </div>

    <SearchBar  />
    <FiltersPk handlePage={handlePage}/>
    <NotFound/>
   
         <div className={style.cardsPoke}>
          { pokeFilters.length > 0 ? 
          pokeFilters.slice( actualPage,nextPage).map(p => {
            if(p.dbCreated == true){
                let ruteId = "/pokemon/" + p.id
                return  (
                    <Link to={ruteId} > 
                    <PokeCard 
                     className={style.linky}
                    types={[p.types[0]?.name , p.types[1]?.name]}
                    id={p.id}
                    name={p.name}
                    image={p.image} 
                    />
                    </Link>
                    )}
            else{
                let ruteId = "/pokemon/" + p.id
                return  (
                    <Link to={ruteId} > 
                    <PokeCard 
                    types={p.types}
                    id={p.id}
                    name={p.name}
                    image={p.image} 
                    />
                    </Link>
                    )
            }
                }
                    )  : allThePoke.length > 0  ?  allThePoke.slice(actualPage,nextPage).map(p => {
                        if(p.dbCreated == true){
                            let ruteId = "/pokemon/" + p.id
                            return  (
                                <Link to={ruteId} > 
                                <PokeCard 
                                types={[p.types[0]?.name , p.types[1]?.name]}
                                id={p.id}
                                name={p.name}
                                image={p.image} 
                                />
                                </Link>
                                )}
                        else{
                            let ruteId = "/pokemon/" + p.id
                            return  (
                                <Link to={ruteId} > 
                                <PokeCard 
                                types={p.types}
                                id={p.id}
                                name={p.name}
                                image={p.image} 
                                />
                                </Link>
                                )
                        }
                            }
                                )  : <Loading/>            
                 }
                             
      </div>
      
    
    <div className={style.pagination}> 
    <button className={style.pagin} name="prev" onClick={handlePrevNext}> Prev</button>
    <Pagination  handlePage={handlePage} handlePrevNext={handlePrevNext} />
            <button className={style.pagin} name="next" onClick={handlePrevNext}> Next </button>
    </div>
               

<div className={style.presentation2}> 
<img className={style.logos} src={errorImg}/>
<h1 className={style.welc2}> WARNING </h1>
<h3 className={style.welc3}> You are about to enter the laboratory, please be very careful, pokemon are living beings with feelings.</h3>
<div>
    <Link to="/create" >
        <button className={style.btnCreate} onClick={() =>alert("You are about to enter the laboratory...")}> Create </button>
    </Link>

</div>
</div>
</div>
   
)
}


export default Home

