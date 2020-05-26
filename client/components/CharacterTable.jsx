import React from 'react'

class CharacterTable extends React.Component {
  render () {
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
                  <td className="sideTD">Age:</td>
                  <td key={characters.id} className="api-age">{characters.age}</td>
                </tr>
                <tr>
                  <td className="sideTD">Gender:</td>
                  <td key={characters.id} className="api-gender">{characters.gender}</td>
                </tr>
                <tr>
                  <td className="sideTD">Race:</td>
                  <td key={characters.id} className="api-race">{characters.race}</td>
                </tr>
                <tr>
                  <td className="sideTD">Job:</td>
                  <td key={characters.id} className="api-job">{characters.job}</td>
                </tr>
                <tr>
                  <td className="sideTD">Description:</td>
                  <td key={characters.id} className="api-description">{characters.description}</td>
                </tr>
                <tr>
                  <td className="sideTD">Image:</td>
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
