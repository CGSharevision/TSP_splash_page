import React, { Component } from 'react'
import Table from './Table'

class App extends React.Component {
    removeCharacter = (index) => {
        const { characters } = this.state
      
        this.setState({
          characters: characters.filter((character, i) => {
            return i !== index
          }),
        })
      }

      state = {
        characters: [
            {
                name: 'Charlie',
                email: 'charlie@pattyspub.com',
            },
            {
                name: 'Mac',
                email: 'mac@pattyspub.com',
            },
            {
                name: 'Dee',
                email: 'dee@pattyspub.com',
            },
            {
                name: 'Dennis',
                email: 'dennis@pattyspub.com',
            },
        ],
      }
    
    render() {
        
        const { characters } = this.state
          
      return (
        <div className="container">
            <Table characterData={characters} removeCharacter={this.removeCharacter}/>
        </div>
      )
    }
}

export default App