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
    },(1))
    if(!characters) {
        return <p>Loading.......</p>
    }
    console.log(characters.results)
  
    return(
    <div className="card-container">
      {characters.results.map(item=> {
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