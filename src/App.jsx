import useFetch from './hooks/useFecthCharacters';
import './App.css';
import { useEffect } from 'react';

function App() {
  const urlPokemon = 'https://pokeapi.co/api/v2/pokemon/1';
  const urlRick = 'https://rickandmortyapi.com/api/character/1';
  const pokemon = useFetch(urlPokemon)
  const rickAndMorti = useFetch(urlRick)

//  console.log(pokemon);
 console.log(rickAndMorti);

 

  return (
    <section>
      {pokemon.data && <article className="card">
        <img src={pokemon.data.sprites.other.dream_world.front_default} alt="imagen del personaje" className="card-image" />
        <h2 className="card-title">{pokemon.data.name}</h2>
        {pokemon.data.types.map(type => <p key={type.type.name} className="card-name">{type.type.name}</p>)}  
       
      </article>}

      {rickAndMorti.data && <article className="card">
        <img src={rickAndMorti.data.image} alt="imagen del personaje" className="card-image" />
        <h2 className="card-title">{rickAndMorti.data.name}</h2>
        
        <p key={rickAndMorti.data.name} className="card-name">{rickAndMorti.data.species}</p>
       
      </article>}

    </section>
  );
}

export default App;
