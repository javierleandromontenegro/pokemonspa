import React from "react";
import style from "./styles/Loading.module.css";
import loadingGif from "../imgsGif/in.gif"

const Loading = () => {


    return (
        <div className={style.loadCont}>
            <h2 className={style.textt}> The pokemos are loading </h2>
            <img className={style.loading} src={loadingGif} alt="Awaaaitiaaaaa"/>
            
        </div>  
    )
}


export default Loading