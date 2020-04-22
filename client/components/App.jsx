import React from 'react'
import Header from './Header'
// import Characterlist from './Characterlist'
import characters from '../../data/characters'
// import List from './List'
import CharacterTable from './CharacterTable'

// C:\Users\j10i_\Dev-Academy\p-project\ff-project\server\public\css\main.css


const App = () => {
  return (
    <div>
      <Header />
      {/* <Characterlist characters={characters} /> */}
      {/* <List /> */}
      <CharacterTable characters={characters} />
    </div>
  )
}

export default App
