import React from "react";
import style from "./styles/PokeCard.module.css"
import { Link } from "react-router-dom";

const PokeCard = ({ name, id , image , types}) => {

return (
  
<div className={style.container}>
    <img className={style.image1} src={image} />
    <h3 className={style.name1}> {name.toUpperCase() } </h3>
        <div> {
          types.length && types.map(
            (type) => <div> {type} </div> ) }
            </div>

</div>


)

}

export default PokeCard