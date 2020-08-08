import React, { Component } from 'react'
import PokeItem from './PokeItem.js'

export default class PokeList extends Component {
    render() {
        const { 
            pokeState, 
            handleNextClick, 
            handlePrevClick,
            currentPage,
            totalPages
         } = this.props;

        return (
            <div >
                {
                    pokeState.length > 0 && <div className="prevNext">
                        {
                            Number(currentPage) !== 1 
                            && <button onClick={handlePrevClick}>Prev</button>
                        }
                       
                        {
                            Number(currentPage) !== Number(totalPages) &&
                            <button  onClick={handleNextClick}>Next</button>
                        }
                        <div>
                        {currentPage} of {totalPages}
                        </div>
                    </div>
                }
                <div className="pokelist">
                
                    {
                        this.props.pokemonArray.map(poke => <PokeItem poke={poke}/>)
                    }
                </div>
            </div>
        )
    }
}