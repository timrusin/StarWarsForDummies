import React, { Route, Routes } from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css';
import Navigation from './Components/Navigation'
import Home from './Pages/Home'
import Characters from './Pages/Characters'
import Planets from './Pages/Planets'
import Movies from './Pages/Movies'
import CharacterInfo from './Pages/CharacterInfo'
import PlanetInfo from './Pages/PlanetInfo'
import MovieInfo from './Pages/MovieInfo'

function App() {
  return (
    <div>
      <Navigation/>
        <main>
          <Routes>
            <Route path='/' element={<Home/>}/>
            <Route path='/characters' element={<Characters/>}/>
            <Route path='/planets' element={<Planets/>}/>
            <Route path='/movies' element={<Movies/>}/>
            <Route path='/character/:index' element={<CharacterInfo/>}/>
            <Route path='/planet/:index' element={<PlanetInfo/>}/>
            <Route path='/movie:id' element={<MovieInfo/>}/>
          </Routes>
        </main>
     </div>
  );
}

export default App;
