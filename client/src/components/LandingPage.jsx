import React from "react";
import { Link } from 'react-router-dom';
import style from "./styles/LandingPage.module.css";
const LandingPage = () => {

return (
    <div className={style.back1}> 
    <div className ={style.relativecont} >
    <h1 className={style.welcome} > Welcome to the Pokeworld </h1>
    <Link to="/home"  >
    <button className={style.btn}>  Gotta Catch 'Em All!! </button>    
    </Link>    
    </div>
    </div>
        )};


export default LandingPage