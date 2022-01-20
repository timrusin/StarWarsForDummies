import React, { useState, useEffect } from "react";
import '../CSS/Characters.css'
import CharacterCard from '../Components/CharacterCard'

const Characters = ()=>{
  
   const [characters, setCharacters]= useState()
     useEffect(()=> {
        fetch('https://swapi.dev/api/people/?page=1')
        .then((res)=>res.json())
        .then((json)=>{
            setCharacters(json)
        })
    },(1))
    if(!characters) {
        return <p>Loading.......</p>
    }
    console.log(characters)
  
    return(
    <div className="card-container">
      {characters.results.map(item=> {
          return (
        <div className="characters-list">
          <CharacterCard {...item}/>
        </div>
            )
      })}
    </div>
  )
}
export default Characters