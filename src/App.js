import React, { Route, Routes } from 'react-router-dom'
import Navigation from './components/Navigation'
import Home from './pages/Home'
import Characters from './pages/Characters'
import CharactersPageTwo from './pages/CharactersPageTwo'
import CharactersPageThree from './pages/CharactersPageThree'
import CharactersPageFour from './pages/CharactersPageFour'
import CharactersPageFive from './pages/CharactersPageFive'
import CharactersPageSix from './pages/CharactersPageSix'
import CharactersPageSeven from './pages/CharactersPageSeven'
import CharactersPageEight from './pages/CharactersPageEight'
import CharactersPageNine from './pages/CharactersPageNine'
import Planets from './pages/Planets'
import PlanetsPageTwo from './pages/PlanetsPageTwo'
import PlanetsPageThree from './pages/PlanetsPageThree'
import PlanetsPageFour from './pages/PlanetsPageFour'
import PlanetsPageFive from './pages/PlanetsPageFive'
import PlanetsPageSix from './pages/PlanetsPageSix'
import Movies from './pages/Movies'
 
function App() {
  return (
  <>
    <Navigation/>
      <main>
      <Routes>
        <Route path='/' element={ <Home/> }/>
          <Route path='/characters/page1' element={ <Characters/> }/>
          <Route path='/characters/page2' element={ <CharactersPageTwo/> }/>
          <Route path='/characters/page3' element={ <CharactersPageThree/> }/>
          <Route path='/characters/page4' element={ <CharactersPageFour/> }/>
          <Route path='/characters/page5' element={ <CharactersPageFive/> }/>
          <Route path='/characters/page6' element={ <CharactersPageSix/> }/>
          <Route path='/characters/page7' element={ <CharactersPageSeven/> }/>
          <Route path='/characters/page8' element={ <CharactersPageEight/> }/>
          <Route path='/characters/page9' element={ <CharactersPageNine/> }/>
          <Route path='/planets/page1' element={ <Planets/> }/>
          <Route path='/planets/page2' element={ <PlanetsPageTwo/> }/>
          <Route path='/planets/page3' element={ <PlanetsPageThree/> }/>
          <Route path='/planets/page4' element={ <PlanetsPageFour/> }/>
          <Route path='/planets/page5' element={ <PlanetsPageFive/> }/>
          <Route path='/planets/page6' element={ <PlanetsPageSix/> }/>
          <Route path='/movies' element={ <Movies/> }/>
        </Routes>
      </main>
  </>
  );
}

export default App;
