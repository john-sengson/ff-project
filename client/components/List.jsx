
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
  constructor(props) {
    super(props)

    this.state = {
      text: [],
    }
  }

  componentDidMount() {
    request.get(apiUrl)
      .then(res => {
        const text = JSON.parse(res.body.text)
        // console.log(text)
        this.setState({ text: text })
      })
  }



  render() {
    // const { text } = this.state.text
    console.log(this.state.text[1])

    return (
      <div className='characterbox'>
        <h1>Characters list below (work in progress)</h1>
        <h2>Hello</h2>
        {this.state.text.map((text, id) => {
          <h1 key={id}>Heelo:{text[0]}</h1>
        })}

      </div>
    )
  }
}


export default List