import React from 'react';
import './App.css';
import request from 'superagent';
import Header from './Header.js';
import Params from './Params.js';
import PokeList from './PokeList.js';


class App extends React.Component {
  state = {
    search: '',
    pokeState: [],
  }


  handleSearchClick = async () => {
    const data = await request.get(`https://alchemy-pokedex.herokuapp.com/api/pokedex?perPage=1000&pokemon=${this.state.search}`);

    this.setState({pokeState: data.body.results});
  }

  handleSearchInput = (e) => {
    const inputValue = e.target.value;
    this.setState({ search: inputValue })
  }


  render() {
    return (
      <>
        <Header/>
        <Params handleSearchClick={this.handleSearchClick} handleSearchInput={this.handleSearchInput} handleSortClick={this.handleSortClick} />
        <PokeList pokemonArray={this.state.pokeState}/>
      </>
    );
  }

}

export default App;