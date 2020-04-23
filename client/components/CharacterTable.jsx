import React from 'react'





class CharacterTable extends React.Component {

  render() {
    const { characters } = this.props.characters
    return (
      <div className='characterbox'>
        <table className="table">
          {characters.map((characters) => {
            return (
              <>
                <tr>
                  <th key={characters.id} className='origin-name'>-{characters.origin}</th>
                  <th key={characters.id} className='character-name'>{characters.name} </th>
                </tr>
                <tr>
                  <td>Age:</td>
                  <td key={characters.id} className="api-data">{characters.age}</td>
                </tr>
                <tr>
                  <td>Gender:</td>
                  <td key={characters.id} className="api-data">{characters.gender}</td>
                </tr>
                <tr>
                  <td>Race:</td>
                  <td key={characters.id} className="api-data">{characters.race}</td>
                </tr>
                <tr>
                  <td>Job:</td>
                  <td key={characters.id} className="api-data">{characters.job}</td>
                </tr>
                <tr>
                  <td>Description:</td>
                  <td key={characters.id} className="api-data">{characters.description}</td>
                </tr>
                <tr>
                  <td>Image:</td>
                  <td key={characters.id}><img src={characters.picture} className="character-image"></img></td>
                </tr>
                <br />
                <br />
              </>
            )
          })}
        </table>
      </div>
    )
  }
}


export default CharacterTable