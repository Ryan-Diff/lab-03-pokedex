import React, { Component } from 'react'
import request from 'superagent';
import Params from './Params.js';
import PokemonList from '../DisplayPage/PokeList.js'

export default class PokeSearch extends Component {
    state ={
        search: '', 
        searchBy: 'pokemon',
        pokeState: [],
    }

    handleSearchClick = async () => {
        const data = await request.get(`https://alchemy-pokedex.herokuapp.com/api/pokedex?perPage=1000&${this.state.searchBy}=${this.state.search}`);
        
        this.setState({pokeState: data.body.results});
    }

    handleSearchInput = (e) => {
        const inputValue = e.target.value;
        this.setState({ search: inputValue})
    }

    handleSelect = (e) => {
        this.setState({ searchBy: e.target.value });
    }

    render() {
        console.log(this.state)
        return (
            <section>
                <main>
                <Params handleSearchClick={this.handleSearchClick} handleSearchInput={this.handleSearchInput} handleSortClick={this.handleSortClick} handleSelectChange={this.handleSelect}  />
                <PokemonList pokemonArray={this.state.pokeState} />
                </main>
            </section>

           
        )
    }
}
