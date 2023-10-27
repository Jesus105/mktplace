import React, {useEffect, useState} from 'react';
import './styles/index.scss'
import Pokedex from './lib/Pokedex'
import PokemonBadge from './Components/PokemonBadge.jsx'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Navbarmkt } from './Components/Navbarmkt'


function App() {
 
 const [ pokemons, setPokemons ] = useState([])
 
 useEffect(() => {
   Pokedex.getPokemonsList({ limit: 150 })
    .then((pokedexResponse) =>{
      setPokemons(pokedexResponse.results) 
    })
 }, [])
 
 return(
  <>
      <Navbarmkt/>
      <main>
          

          <section className='results'>

            {
            pokemons.map((pokemon) => {
              
              return (<PokemonBadge
                name = {pokemon.name}
                url = {pokemon.url}
                key = {pokemon.name}
                 />)
            })
            }

          </section>
      </main>
    </>
  )
}


export default App;
