import React, { useState } from 'react';
import fotito from "./641968.jpg"

 const Error1 = () => {
  const [ show , setShow] = useState(true)

  return (
    <>
      <img src={fotito} 
       
       onClick={() => {
           setShow(!show)
        }}
        
        >
      </img>
          {show ? 
          <div> SOY VERDADERO PERRO QUE ONDA  </div>
        : <div> SOY FALSO PERROOOOOOOOOOOOO </div>
       }

    
    </>
  );
};


export default Error1




