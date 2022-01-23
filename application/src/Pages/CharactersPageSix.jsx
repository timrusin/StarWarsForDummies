import React, { useState, useEffect } from "react";
import '../CSS/Characters.css'
import CharacterCard from '../Components/CharacterCard'
import { Container } from "reactstrap";
const CharactersPageSix = ()=>{
  
   const [characters, setCharacters]= useState()

     useEffect(()=> {
        fetch('https://swapi.dev/api/people/?page=6')
        .then((res)=>res.json())
        .then((json)=>setCharacters(json))
    },[])
    if(!characters) {
      return (
          <Container>
          <p>Loading.......</p>
          </Container>
        )
    }
    console.log(characters)
    const charactersArray = characters.results
    console.log(charactersArray)
    
    return(
    <Container>
      <div className="card-container">
        {charactersArray.map((item, i)=> {
            return (
          <div className="characters-list">
            <CharacterCard key={i} arrayIndex={i+51} {...item}/>
          </div>
              )
        })}
      </div>
    </Container>
  )
}
export default CharactersPageSix