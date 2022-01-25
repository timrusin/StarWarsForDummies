import React, { useState, useEffect } from "react";
import '../CSS/CharacterCard.css'
import { Container, Spinner } from "reactstrap";
import { Link } from "react-router-dom";


const Characters = ()=>{
  
   const [characters, setCharacters]= useState()

     useEffect(()=> {
        fetch('https://swapi.dev/api/people/?page=1')
        .then((res)=>res.json())
        .then((json)=>setCharacters(json))
    },[])
    if(!characters) {
      return (
        <div className="spinner">
          <Container>
          <Spinner color="warning" type="border"></Spinner>
          </Container>
        </div>
        )
    }
    console.log(characters)
    const charactersArray = characters.results
    console.log(charactersArray)
  

    return(
    <Container>
        <div className="page-buttons">
          <Link to='/characters/page2'>
            <button className="prev-next-btn">next</button>
          </Link>
        </div>
      <div className="card-container">
        {charactersArray.map((item)=> {
            return (
              <Container key={item.name}>
              <div className="character-container">
                  <h1 className="character-name">{item.name}</h1>
                  <ul className="item-specs-list">
                      <li>Gender: {item.gender}</li>
                      <li>Height: {item.height} cm</li>
                      <li>Mass: {item.mass} kg</li>
                      <li>Hair Color: {item.hair_color}</li>
                      <li>Skin Color: {item.skin_color}</li>
                  </ul>
              </div>
              </Container>
              )
        })}
        <div className="page-buttons">
          <Link to='/characters/page2'>
            <button className="prev-next-btn-btm">next</button>
          </Link>
        </div>
      </div>
    </Container>
  )
}
export default Characters