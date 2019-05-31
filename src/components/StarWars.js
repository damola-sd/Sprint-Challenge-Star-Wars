import React, { Component } from 'react';
import StarWarsCharacter from './StarWarsCharacter';
import DogComponent from './DogComponent';
import './StarWars.less';

class App extends Component {
  constructor() {
    super();
    this.state = {
      starwarsChars: [],
      dogs: []

    };
  }

  componentDidMount() {
    this.getCharacters('https://swapi.co/api/people/');
    this.getDogs('https://dog.ceo/dog-api/#all');
  }

  getCharacters = URL => {
    // feel free to research what this code is doing.
    // At a high level we are calling an API to fetch some starwars data from the open web.
    // We then take that data and resolve it our state.
    fetch(URL)
      .then(res => {
        return res.json();
      })
      .then(data => {
        this.setState({ starwarsChars: data.results });
      })
      .catch(err => {
        throw new Error(err);
      });
  };

// Stretch problem Dog 
getDogs = URL => {
  // feel free to research what this code is doing.
  // At a high level we are calling an API to fetch some starwars data from the open web.
  // We then take that data and resolve it our state.
  fetch(URL)
    .then(res => {
      return res.json();
    })
    .then(data => {
      this.setState({ dogs: data.results });
    })
    .catch(err => {
      throw new Error(err);
    });
};

  render() {
    return (
      <div className="App">
        <h1 className="Header">Star Wars Characters</h1>
        <DogComponent dogs={this.state.dogs}
        />
        <StarWarsCharacter
          characters={this.state.starwarsChars}
          />
      </div>
    );
  }
}

export default App;
