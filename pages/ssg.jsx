import PokemonCard from "@/components/pokemon-card"
import { useEffect, useState } from "react"

export default function Home(props) {

  return (
    <>
      <header className="p-10">
        <img 
        className="mx-auto"
        src="https://raw.githubusercontent.com/PokeAPI/media/master/logo/pokeapi_256.png" 
        alt="logo"/>
      </header>
      <section className="grid grid-cols-2 md:grid-cols-5 gap-5 p-10">
        {
          props.pokemonList.map(pokemon => {
            return <PokemonCard key={pokemon.url} url={pokemon.url}></PokemonCard>
          })
        }
      </section>
    </>
  )
}



export async function getStaticProps() {
  console.log('Hola desde el server')

  const pokemonList = await fetch('https://pokeapi.co/api/v2/pokemon?limit=10')
  .then(res => res.json())
  .then( res => res.results);
    console.log('pokemonList: ', pokemonList);

    return {
        props: {pokemonList}
    }
}