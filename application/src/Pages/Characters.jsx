import React, { useState, useEffect } from "react";
import '../CSS/Characters.css'
import CharacterCard from '../Components/CharacterCard'

const Characters = ()=>{
  return(
      <p>This is the characters dashboard</p>
  )
//  const [characters, setCharacters]= useState()
//      useEffect(()=> {
//         fetch('https://swapi.dev/api/people')
//         .then((res)=>res.json())
//         .then((json)=>{
//             setCharacters(json)
//         })
//     },[])
//     if(!characters) {
//         return <p>Loading.......</p>
//     }
   
//     characters.map((item)=>{
//         return <CharacterCard {...item}/>
//     })
    

}
export default Characters