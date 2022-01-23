import React, { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom"
import { Container } from "reactstrap";
import '../CSS/CharacterCard.css'

const CharacterInfo = ()=>{
    let { index } = useParams()
    const int = parseInt(index) + 1
    const [character, setCharacter]= useState()

    const URL = 'https://swapi.dev/api/people/'
    const newURL = URL + int
    console.log(newURL)

        useEffect(()=>{
            console.log(typeof index)
            console.log(index)
            console.log(int)
            fetch(newURL)
            .then((res)=> res.json())
            .then((json)=> {
                setCharacter(json)
            })
        },[])
        if (!character){
            return (
                <Container>
                  <p>Loading.......</p>
                </Container>
                )
        }

        return(
        <Container>
        <div className="character-container">
            <h1 className="character-name">{character.name}</h1>
            <ul className="character-specs-list">
                <li>Gender: {character.gender}</li>
                <li>Height: {character.height} cm</li>
                <li>Mass: {character.mass} kg</li>
                <li>Hair Color: {character.hair_color}</li>
                <li>Skin Color: {character.skin_color}</li>
            </ul>
        </div>
        </Container>
        )
    }

    export default CharacterInfo