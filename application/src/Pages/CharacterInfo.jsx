import React from "react";
import '../CSS/CharacterInfo.css'
import { useState, useEffect } from 'react'
import { useParams, Link } from "react-router-dom"
import { Container } from "reactstrap";

const CharacterInfo = ()=>{
    let { index } = useParams()
    const int = parseInt(index) + 1
    const [character, setCharacter]= useState(null)

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
            return <p>Loading...</p>
        }

        return(
        <Container>
            <h1>{character.name}</h1>
            <ul>
                <li>Height: {character.height}</li>
                <li>Mass: {character.mass}</li>
                <li>Hair Color: {character.hair_color}</li>
                <li>Skin Color: {character.skin_color}</li>
            </ul>
        <Link to='../characters'><button>Back</button></Link> 
        </Container>
        )
    }

    export default CharacterInfo