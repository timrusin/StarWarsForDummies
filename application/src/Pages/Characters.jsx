import React, { useState, useEffect } from "react";
import '../CSS/Characters.css'
import CharacterCard from '../Components/CharacterCard'

const Characters = ()=>{
  
   const [characters, setCharacters]= useState()
     useEffect(()=> {
        fetch('https://swapi.dev/api/people')
        .then((res)=>res.json())
        .then((json)=>{
            setCharacters(json)
        })
    },[])
    if(!characters) {
        return <p>Loading.......</p>
    }
    console.log(characters)
  
    return(
    <div className="card-container">
      {characters.map((item)=> {
          return (
          <h1>{item.name}</h1>
            )
      })}
    </div>
  )

   

    

}
export default Characters