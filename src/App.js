import React from 'react';
import logo from './logo.svg';
import './App.css';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      pokemon: [{name: 'Pikachu'}, {name: 'Gengar'}],
    };
  }

  componentDidMount() {
    fetch("https://pokeapi.co/api/v2/pokemon")
    .then(res => res.json())
    .then(data => this.setState({pokemon: data.results}))
  }

  render() {
    return (
      <div>
        <ul>
        {this.state.pokemon.map(p => (
          <li>{p.name}</li>
        ))}
        </ul>
      </div>
    );
  }
}

export default App;
