import React, { Component } from 'react'

export default class Pokeitem extends Component {
    render() {
        return (
            <>
                <h1>{this.props.poke.pokemon}</h1>
                <p>Attack: {this.props.poke.attack} Defense: {this.props.poke.attack}</p>
                <img src={this.props.poke.url_image} alt={this.props.poke.pokemon} />
            </>
        )
    }
}
