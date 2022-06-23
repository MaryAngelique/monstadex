import logo from './logo.svg';
import './App.css';
import { Component } from 'react';

class App extends Component {
  constructor() {
    super();

    this.state = {
      monsters: [
        {
          name: "Linda",
          id: "112561"
        },
  
        {
          name: "Frank",
          id: "786435"
        },
  
        {
          name: "Jacky",
          id: "642484"
        },

        {
          name: "Andrie",
          id: "642484"
        },
      ]
    }
  }

  render() {
    return (
      <div className="App">
        {
          this.state.monsters.map((monster) => {
            return (
              <div key={monster.id}>
                <h1>{monster.name}</h1>
              </div>
            );
          })
        }
      </div>
    );
  };
}

export default App;
