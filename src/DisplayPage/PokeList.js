import React, { Component } from 'react'
import PokeItem from './PokeItem.js'

export default class PokeList extends Component {
    render() {
        return (
            <div className='pokeList'>
                
                {this.props.pokemonArray.map(poke => <PokeItem poke={poke}/>)} 
            </div>
        )
    }
}
