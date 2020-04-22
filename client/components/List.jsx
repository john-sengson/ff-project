
import React from 'react'
import request from 'superagent'


const apiUrl = 'http://localhost:3000/api/v1/characters'

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


class List extends React.Component {
  state = {
    name: '',
    age: '',
    gender: '',
    race: '',
    job: '',
    origin: '',
    description: '',
    picture: '',
  }

  componentDidMount() {
    request.get(apiUrl)
      .then(res => {
        const { name, age, gender, race, job, origin, description, picture } = res.body
        this.setState({ name, age, gender, race, job, origin, description, picture })
      })
  }


  render() {
    return (
      <div className='characterbox'>
        <h1>Characters list below (work in progress)</h1>
        <ul>
          {api.map((characters) => {
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


export default List