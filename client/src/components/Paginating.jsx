import React from "react";
import {useEffect, useState} from 'react';
import { useDispatch, useSelector } from 'react-redux';
import style from "./styles/Paginating.module.css"

const Pagination = ({handlePage}) => {
    const pokemons = useSelector((state) => state.pokemons);
    const pokelength = Math.ceil(pokemons.length / 12)
    let button1 = []
    for(let i = 0; i < pokelength; i++) {
       button1.push(i+1) 
    } 


return (
        
        <div >
            {button1 && button1.map(n => 
                    <button className={style.pagin} key={n}  onClick={()=> handlePage(n)} >{n}</button>
                    )
                }
               
        </div>
      )


}

export default Pagination 