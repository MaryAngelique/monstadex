import logo from './logo.svg';
import './App.css';
import { Component } from 'react';

import CardList from './components/cards-list/card-list.component';

class App extends Component {
  constructor() {
    super();

    this.state = {
      monsters: [],
      searchField: "",
    }
  }

  componentDidMount() {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((users) => 
        this.setState(
          () => {
            return { monsters: users}
          }
        )
      );
  }

  onSearchChange = (event) => {
    const searchField = event.target.value.toLocaleLowerCase();

    this.setState(() => {
      return { searchField };
    });
  }

  render() {

    const { monsters, searchField } = this.state;
    const { onSearchChange } = this;

    const filteredMonsters = this.state.monsters.filter((monster) => {
      return monster.name.toLocaleLowerCase().includes(this.state.searchField);
    })

    return (
      <div className="App">
        <input 
          className="search-box" 
          type="search" 
          placeholder="Search Monsters" 
          onChange={this.onSearchChange} 
        />

          <CardList monsters={ filteredMonsters } />
      </div>
    );
  };
}

export default App;
