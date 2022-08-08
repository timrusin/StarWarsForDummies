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
          <Route path='/planets' element={ <Planets/> }/>
          <Route path='/movies' element={ <Movies/> }/>
        </Routes>
      </main>
  </>
  );
}

export default App;
