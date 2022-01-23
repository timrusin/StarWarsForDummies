import React, { Route, Routes } from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css';
import Navigation from './Components/Navigation'
import Home from './Pages/Home'
import Characters from './Pages/Characters'
import CharactersPageTwo from './Pages/CharactersPageTwo'
import CharactersPageThree from './Pages/CharactersPageThree'
import CharactersPageFour from './Pages/CharactersPageFour'
import CharactersPageFive from './Pages/CharactersPageFive'
import CharactersPageSix from './Pages/CharactersPageSix'
import CharactersPageSeven from './Pages/CharactersPageSeven'
import CharactersPageEight from './Pages/CharactersPageEight'
import CharactersPageNine from './Pages/CharactersPageNine'
import Planets from './Pages/Planets'
import PlanetsPageTwo from './Pages/PlanetsPageTwo'
import PlanetsPageThree from './Pages/PlanetsPageThree'
import PlanetsPageFour from './Pages/PlanetsPageFour'
import PlanetsPageFive from './Pages/PlanetsPageFive'
import PlanetsPageSix from './Pages/PlanetsPageSix'
import Movies from './Pages/Movies'
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <>
      <Navigation/>
        <main>
          <Routes>
            <Route path='/' element={<Home/>}/>
            <Route path='/characters/page1' element={<Characters/>}/>
            <Route path='/characters/page2' element={<CharactersPageTwo/>}/>
            <Route path='/characters/page3' element={<CharactersPageThree/>}/>
            <Route path='/characters/page4' element={<CharactersPageFour/>}/>
            <Route path='/characters/page5' element={<CharactersPageFive/>}/>
            <Route path='/characters/page6' element={<CharactersPageSix/>}/>
            <Route path='/characters/page7' element={<CharactersPageSeven/>}/>
            <Route path='/characters/page8' element={<CharactersPageEight/>}/>
            <Route path='/characters/page9' element={<CharactersPageNine/>}/>
            <Route path='/planets/page1' element={<Planets/>}/>
            <Route path='/planets/page2' element={<PlanetsPageTwo/>}/>
            <Route path='/planets/page3' element={<PlanetsPageThree/>}/>
            <Route path='/planets/page4' element={<PlanetsPageFour/>}/>
            <Route path='/planets/page5' element={<PlanetsPageFive/>}/>
            <Route path='/planets/page6' element={<PlanetsPageSix/>}/>
            <Route path='/movies' element={<Movies/>}/>
          </Routes>
        </main>
     </>
  );
}

export default App;
