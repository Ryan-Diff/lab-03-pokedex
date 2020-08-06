import React, { Component } from 'react'

export default class PokeSearch extends Component {
    render() {
        return (
            <div>
                <button onClick={this.props.handleSearchClick}>Search By Name</button>
                <input onChange={this.props.handleSearchInput} />
            </div>
        )
    }
}
