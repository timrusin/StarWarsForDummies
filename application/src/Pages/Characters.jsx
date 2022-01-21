import React, { useState, useEffect } from "react";
import '../CSS/Characters.css'
import CharacterCard from '../Components/CharacterCard'
import { NavItem } from "reactstrap";

const Characters = ()=>{
  
   const [characters, setCharacters]= useState()

     useEffect(()=> {
        fetch('https://swapi.dev/api/people/')
        .then((res)=>res.json())
        .then((json)=>{ 
            setCharacters(json) 
        })
    },[])
    if(!characters) {
        return <p>Loading.......</p>
    }
    console.log(characters)
    const charactersArray = characters.results
    console.log(charactersArray)
    
    return(
    <div className="card-container">
      {charactersArray.map(item=> {
          return (
        <div className="characters-list">
          <CharacterCard {...item} key={item.name}/>
        </div>
            )
      })}
    </div>
  )
}
export default Characters