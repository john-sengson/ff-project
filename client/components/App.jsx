import React from 'react'
import Header from './Header'
// import Characterlist from './Characterlist'
import characters from '../../data/characters'
import List from './List'
import CharacterTable from './CharacterTable'
import Footer from './Footer'


const App = () => {
  return (
    <div>
      <Header />
      {/* <Characterlist characters={characters} /> */}
      <List />
      <CharacterTable characters={characters} />
      <Footer />
    </div>
  )
}

export default App
