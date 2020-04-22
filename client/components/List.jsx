
import React from 'react'
import request from 'superagent'


const apiUrl = 'http://localhost:3000/api/v1/characters'
// const apiUrl = 'https://www.moogleapi.com/api/v1/characters/'

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
    text: [{
      name: '',
      age: '',
      gender: '',
      race: '',
      job: '',
      origin: '',
      description: '',
      picture: '',
    }]
  }

  componentDidMount() {
    request.get(apiUrl)
      .then(res => {
        const { text: [name, age, gender, race, job, origin, description, picture] } = res.body
        this.setState({ text: [{ name, age, gender, race, job, origin, description, picture }] })
      })

  }



  render() {
    const { text } = this.state.text
    console.log(this.state.text)
    return (
      <div className='characterbox'>
        <h1>Characters list below (work in progress)</h1>
        <ul>
          {/* {characters.map(() => {
            return ( */}
          <>
            <li key={this.state.id} style={nameStyle}>{this.state.name}</li>
            <p key={this.state.id} style={pStyle}>Age:{this.state.age} </p>
            <p key={this.state.id} style={pStyle}>Gender:{this.state.gender}</p>
            <p key={this.state.id} style={pStyle}>Race:{this.state.race}</p>
            <p key={this.state.id} style={pStyle}>Job:{this.state.job}</p>
            <p key={this.state.id} style={pStyle}>Origin:{this.state.origin}</p>
            <p key={this.state.id} style={pStyle}>Description:{this.state.description}</p>
            <p key={this.state.id} style={pStyle}>Image:<img src={this.state.picture} style={pixStyle}></img></p>
          </>
          {/* )
          })} */}
        </ul>
      </div>
    )
  }
}


export default List