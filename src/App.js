import logo from './logo.svg';
import './App.css';
import { Component } from 'react';

import CardList from './components/cards-list/card-list.component';
import SearchBox from './components/search-box/search-box.component';

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
        <h1 className="app-title">MonstaDex</h1>
        <SearchBox 
          onChangeHandler={ onSearchChange } 
          placeholder="Search Monsters"
          className="search-box"
        />

          <CardList monsters={ filteredMonsters } />
      </div>
    );
  };
}

export default App;
