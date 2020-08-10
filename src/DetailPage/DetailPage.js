import React, { Component } from 'react'
import request from 'superagent';


export default class DetailPage extends Component {
    state = { pokemon: {} }

    componentDidMount = async () => {
        const name = this.props.match.params.myPokemonId;
        const data = await request.get(`https://alchemy-pokedex.herokuapp.com/api/pokedex?pokemon=${name}`);
        const pokemon = data.body.results[0];
        this.setState({ pokemon: pokemon})
    }
    render() {
        const { pokemon } = this.state;
        
        return (
            <main class='details'>
                {
                    pokemon
                    && <section className='detailSection'>
                        <div className='detailDiv'>
                        <img className='detailImg'src={pokemon.url_image} alt={pokemon.pokemon} />    
                            <h1>{pokemon.pokemon}</h1>
                            <p>Defense: {pokemon.defense}</p>
                            <p>Attack: {pokemon.attack}</p>
                            <p>Type: {pokemon.type_1}, {pokemon.type_2}</p>  
                        </div>
                    </section>
                }
            </main>
            
        )
    }
}
