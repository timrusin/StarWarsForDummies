import React, { useState, useEffect } from "react";
import { Container, Spinner } from "reactstrap";
import { Link } from "react-router-dom";

const CharactersPageFour = ()=>{
   const [characters, setCharacters]= useState()

     useEffect(()=> {
        fetch('https://swapi.dev/api/people/?page=4')
        .then((res)=>res.json())
        .then((json)=>setCharacters(json))
    },[])
    if(!characters) {
      return (
          <Container>
          <Spinner color="warning" type="border"></Spinner>
          </Container>
        )
    }
    console.log(characters)
    const charactersArray = characters.results
    console.log(charactersArray)
    
    return(
    <Container>
      <div className="page-buttons">
          <Link to='/characters/page3'>
            <button className="prev-next-btn">prev</button>
          </Link>
          <Link to='/characters/page5'>
            <button className="prev-next-btn">next</button>
          </Link>
        </div>
      <div className="card-container">
        {charactersArray.map((item, i)=> {
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
          <Link to='/characters/page3'>
            <button className="prev-next-btn-btm">prev</button>
          </Link>
          <Link to='/characters/page5'>
            <button className="prev-next-btn-btm">next</button>
          </Link>
        </div>
      </div>
    </Container>
  )
}
export default CharactersPageFour