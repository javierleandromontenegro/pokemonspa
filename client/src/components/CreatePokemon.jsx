import React, { useImperativeHandle } from "react";
import axios from "axios"
import {useEffect, useState} from 'react';
import { Link, useHistory } from "react-router-dom";
import { useDispatch, useSelector } from 'react-redux';
import { validate } from "../validators/validate";
import { orderAttack, getPoke , getTypes , createPk} from "../redux/actions/actions";
import style from "./styles/Create.module.css"
import meow from "../imgsGif/meow.png"
import rocket from "../imgsGif/rocket1.png"
import rocket2 from "../imgsGif/rocket2.png"


const CreatePokemon = () => {
    const dispatch = useDispatch()
    const history = useHistory()
    const allPoke = useSelector((state) => state.pokePermanent)
    const copyPoke  = allPoke.slice()
    const allTypes = useSelector((state) => state.types)
    useEffect(() => {
        dispatch(getPoke())
              }, [dispatch])

    const [disabledOrNot , setdisabledOrNot] = useState(true)
    const [check , setCheck] = useState("")
    const [checkTwo , setCheckTwo] = useState("")
    const [input, setInput] = useState({
        name: "",
        hp: "",
        attack: "",
        defense: "",
        speed: "",
        height: "",
        weight: "",
        types: [],
        image: "",
      });
      const [error  , setError] = useState({})
      
      useEffect(() => {
         dispatch(getTypes())
               }, [dispatch])
      let recheck = { target : { value : "sa" , name : "se"}}

      const handleChangeName = (e) => {
        // e.preventDefault()
          let existed = copyPoke.filter((pk) => pk.name == e.target.value) 
          setError(validate({ ...input, [e.target.name]: e.target.value }))
          setInput({ ...input, [e.target.name]: e.target.value });
          if (existed.length > 0){
              setError({ ...error , [e.target.name] :   "There is already a pokemon with that name" })
            }
           
            
             confirmCheck()
            
            // if(Object.keys(error).length > 0 ){setdisabledOrNot(true)}
            
            // if(check.length == 0 || checkTwo.length == 0){setdisabledOrNot(true)}
            // else{

            //     if(Object.keys(error).length < 1 && check.length > 0 && checkTwo.length > 0){setdisabledOrNot(false)}
            // }
        }
            
          
    const handleSubmit = (e)=>{
              e.preventDefault();
              // if(input.image.length == undefined){input.image = "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/1.svg"}
           input.types.push(check)
           input.types.push(checkTwo)
           alert(input.image)
                  dispatch(createPk(input))
                  history.push("/home")
             }
   let confirmCheck = () => {
    if(checkTwo == check){
      return <label className={style.error1}> No se permiten 2 types iguales </label>

    }

        if(checkTwo.length < 1 || check.length < 1){
     
      
      
        return <label className={style.error1}> Select 2 types please </label>
         } }

    const handleCheck = (e) => {
        setCheck(e.target.value)
       
    }

    const handleCheckTwo = (e) => {
        setCheckTwo(e.target.value)
      
    }

    const handleClick = (e) => {
     e.preventDefault()
      if(input.name == "") {
      alert("tenes que poner name ")
     }
    
  }


  

return (
  <div className={style.backgro}> 
  
  <div className={style.backgro1}> 
  <div className={style.presentation}>
  <img className={style.rocket} src={rocket} />
    <h1 className={style.welcome} > Welcome to the laboratory </h1>
    <h3 className={style.guide}> Meow will be your guide.
    He is waiting for you to start the creation of the pokemon.
    BE CAREFUL, IT IS VERY STRICT</h3>
    <img className={style.rocket} src={rocket2} />
  </div>

        <div className={style.formcontainer}> 
    <form className={style.form} onSubmit={handleSubmit}>
    <div className={style.general1}> 

        <div className={style.options}>
           <div className={style.prueba}> 

        <label className={style.label}> Name : </label>
        <input 
        className={style.input1}
      onChange={handleChangeName}
        type="text"
        value={input.name}
        key="name"
        name="name"
        placeholder="Enter name"/> 
        </div>
         {error.name && <p className={style.error1}> {error.name} </p>}
        </div>

        <div className={style.options}>
        <div className={style.prueba}> 
        <label className={style.label} > Health : </label>
        <input onChange={handleChangeName}
        className={style.input1}
        type="number"
        value={input.hp}
         key="hp"
         name="hp"
         placeholder=" 1 - 100 "/>
         </div>
          {error.hp && <p className={style.error1}> {error.hp} </p>}
        </div>

        <div className={style.options}>
        <div className={style.prueba}> 
        <label className={style.label}> Attack : </label>
        <input onChange={handleChangeName}
        className={style.input1}
        key="attack"
        type="number"
        value={input.attack}
        name="attack"
        placeholder=" 1 - 100 "/>
        </div>
          {error.attack && <p className={style.error1}> {error.attack} </p>}
         </div>
        
        <div className={style.options}>
        <div className={style.prueba}> 
        <label className={style.label}> Defense : </label>
        <input onChange={handleChangeName}
        className={style.input1}
        key="defense"
        type="number"
        value={input.defense}
        name="defense"
        placeholder=" 1 - 100 "/>
        </div>
          {error.defense && <p className={style.error1}> {error.defense} </p>}
        </div>

        <div className={style.options}>
        <div className={style.prueba}> 
        <label className={style.label} > Speed : </label>
        <input onChange={handleChangeName}
        className={style.input1}
        key="speed"
        type="number"
        value={input.speed }
        name="speed"
        placeholder=" 1 - 50 "/>
        </div>
          {error.speed && <p className={style.error1}> {error.speed} </p>} 
        </div>

        <div className={style.options}>
        <div className={style.prueba}> 
        <label  className={style.label}> Height : </label>
        <input onChange={handleChangeName}
        className={style.input1}
        key="height"
        type="number"
        value={input.height}
        name="height"
        placeholder=" 1 - 50 "/>
        </div>
          {error.height && <p className={style.error1}> {error.height} </p>} 
        </div>

        <div className={style.options}>
        <div className={style.prueba}> 
        <label className={style.label} > Weight : </label>
        <input onChange={handleChangeName}
        className={style.input1}
         key="weight"
        type="number"
        value={input.weight}
        name="weight"
        placeholder=" 1 - 1000 "/>
        </div>
          {error.weight && <p className={style.error1}> {error.weight} </p>} 
        </div>

        <div className={style.options}>
        <div className={style.prueba}> 
        <label className={style.label} > Image : </label>
        <input 
        onChange={handleChangeName}
        className={style.input1}
       value={input.image}
       key="image"
       name="image" 
       />
        </div>
        </div>

        <div className={style.options2}>
        <label className={style.label} > Choose first type </label>
          
            <select className={style.label} onChange={handleCheck}>
                <option disabled selected >Select  </option>
            {allTypes.length > 0 ? allTypes.map((t) => 
                
                <option 
                     
                    value={t}> {t} 
                </option>
                
                ) : console.log("hola")}

</select>
                 
<div className={style.options2}>
        <label className={style.label} > Choose first type </label>
          
            <select className={style.label} onChange={handleCheckTwo}>
                <option disabled selected >Select  </option>
            {allTypes.length > 0 ? allTypes.map((t) => 
                
                <option 
                
                value={t}> {t} 
                </option>
                
        ) : console.log("hola")}
</select>
 {confirmCheck()}
 
</div>
        
        </div>
        { Object.keys(error)?.length > 0 ? 
        <button disabled="true"> Submit </button> :
         checkTwo == "" ?  <button disabled="true"> Submit </button> :<button type="submit"> Submit </button> }
       
        
        </div>
    </form>
                <img className={style.image} src={meow} />
    </div>
                
                </div>
                </div>
)
}
export default CreatePokemon
