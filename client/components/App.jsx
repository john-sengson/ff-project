import React from 'react'
import Header from './Header'
import Characterlist from './Characterlist'
import characters from '../../data/characters'
// import '../../../../css/main'
// C:\Users\j10i_\Dev-Academy\p-project\ff-project\server\public\css\main.css


const App = () => {
  return (
  <div>
    <Header />
    <Characterlist characters={characters} />
  </div>
  )
}

export default App
