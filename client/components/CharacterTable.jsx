import React from 'react'


const pixStyle = {
  width: '300px',
  height: '300px',
}
const nameStyle = {
  color: 'blue',
  fontSize: '40px',
  align: 'center'
}

const pStyle = {
  color: 'red',
  fontSize: '30px',
  align: 'center'
}


class CharacterTable extends React.Component {

  render() {
    const { characters } = this.props.characters
    return (
      <div className='characterbox'>
        <h1>Characters list below (work in progress)</h1>
        <ul>
          {characters.map((characters) => {
            return (
              <>
                <li key={characters.id} style={nameStyle}>{characters.name}</li>
                <p key={characters.id} style={pStyle}>Age:{characters.age} </p>
                <p key={characters.id} style={pStyle}>Gender:{characters.gender}</p>
                <p key={characters.id} style={pStyle}>Race:{characters.race}</p>
                <p key={characters.id} style={pStyle}>Job:{characters.job}</p>
                <p key={characters.id} style={pStyle}>Origin:{characters.origin}</p>
                <p key={characters.id} style={pStyle}>Description:{characters.description}</p>
                <p key={characters.id} style={pStyle}>Image:<img src={characters.picture} style={pixStyle}></img></p>
              </>
            )
          })}
        </ul>
      </div>
    )
  }
}


export default CharacterTable