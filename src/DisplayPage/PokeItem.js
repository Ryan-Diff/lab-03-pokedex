import React, { Component } from 'react'
import { Link } from 'react-router-dom';

export default class Pokeitem extends Component {
    render() {
        return (
            <div className='pokeItem'>
            <Link to={`/detail/${this.props.poke.pokemon}`}>
                <h1>{this.props.poke.pokemon}</h1>
                <p>Attack: {this.props.poke.attack} Defense: {this.props.poke.attack}</p>
                <img className='pokeDisplay' src={this.props.poke.url_image} alt={this.props.poke.pokemon} />
            </Link>
            </div>
        )
    }
}
