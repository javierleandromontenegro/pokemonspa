import React from "react";
import {useEffect, useState} from 'react';
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from 'react-redux';
import { pokeDetails, getPoke , filterDbApi , clearHome, filterTypes } from "../redux/actions/actions";
import style from "./styles/NotFound.module.css"
import sorry from "../imgsGif/notfound.png"

const NotFound = () => {
    let originState = useSelector((state) => state.pokeOrigins)
    let pokeGeneral = useSelector((state) => state.pokemons)
            if(originState.length > 0 && pokeGeneral.length == 0) {
            return <div className={style.container}>
                <h2 className={style.message}> Sorry Boss, the pokemon was not found. But you can try in the laboratory, maybe they can help you</h2>
                <img className={style.sorry} src={sorry} />
                

            </div>
        }
        else {
            return <></>
        }
   

}


export default NotFound