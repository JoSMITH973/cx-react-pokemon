import React, { Component } from 'react';
import axios from 'axios'

class Main extends Component {
    constructor(props){
        super(props);
        this.state = {
            loading:true,
            pokemons: {}
        }
    }
    componentDidMount() {
        axios.get('/pokemons/pokemonId').then(response => {
            console.log(response)
        })
    }
    render() {
        if (this.state.loading === true) {
            return (
                <h1> Loading ...</h1>
            )
        }
        return (
            <ul>
                <li>

                </li>
            </ul>
        )
        }
}

export default Main