import React, { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import { Container } from "reactstrap";
import '../CSS/MovieInfo.css'

const MovieInfo = ()=>{
    let { index } = useParams()
    const int = parseInt(index)+ 1
    const [movie, setMovie]= useState()

    const URL = 'https://swapi.dev/api/films/'
    const newURL = URL + int

    useEffect(()=>{
        console.log(int)
        fetch(newURL)
        .then((res)=>res.json())
        .then ((json)=>{
            setMovie(json)
        })
    },[])
    if (!movie){
        return <p>Loading...</p>
    }
    return(
    <Container>
        <h1>{movie.title}</h1>
        <ul>
            <li>Episode: {movie.episode_id}</li>
            <li>Director: {movie.director}</li>
            <li>Released: {movie.release_date}</li>
            <li>Producer(s): {movie.producer}</li>
        </ul>
        <Link to='../movies'><button>Back</button></Link> 
    </Container>
    )
}

export default MovieInfo