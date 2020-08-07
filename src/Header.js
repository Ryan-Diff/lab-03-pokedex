import React, { Component } from 'react'
import Nav from './Nav.js';

export default class Header extends Component {
    render() {
        return (
            <div className='header'>
                <h1> React to my Poke'dex</h1>
                <Nav />
            </div>
        )
    }
}
