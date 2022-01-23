import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Container } from "reactstrap";
import { Link } from "react-router-dom";
import '../CSS/PlanetCard.css'

const PlanetInfo = ()=>{
    let { index } = useParams()
    const int = parseInt(index) + 1
    const [planet, setPlanet] = useState()

    const URL = 'https://swapi.dev/api/planets/'
    const newURL = URL + int

        useEffect(()=>{
            fetch(newURL)
            .then((res)=> res.json())
            .then((json)=> {
                setPlanet(json)
            })
        },[])
        if (!planet){
            return (
                <Container>
                  <p>Loading.......</p>
                </Container>
                )
        }
    return(
    <Container>
        <h1>{planet.name}</h1>
        <ul>
            <li>Climate: {planet.climate}</li>
            <li>Diameter: {planet.diameter} km</li>
            <li>Gravity: {planet.gravity} (1 is equal to normal gravity)</li>
            <li>Orbital Period: {planet.orbital_period} days to orbit local star</li>
            <li>Population: {planet.population}</li>
            <li>Residents: {planet.residents}</li>
            <li>Rotation Period: {planet.rotation_period} hours</li>
            <li>Surface Water: {planet.surface_water} %</li> 
            <li>Terrain: {planet.terrain}</li>
        </ul>
    </Container>
    )
}

export default PlanetInfo