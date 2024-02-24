import { useEffect,useState } from "react"
import { PokemonCard } from "./PokemonCard";



export function Pokelist() {
    const [allPokemons, setAllPokemons] = useState([]);
    const getAllPokemons = async () => {
        const respuesta = await fetch(
          "https://pokeapi.co/api/v2/pokemon?limit=649&offset=0"
        );
        const data = await respuesta.json();
        function createPokemonObject(results) {
          results.forEach(async (pokemon) => {
            const res = await fetch(
              `https://pokeapi.co/api/v2/pokemon/${pokemon.name}`
            );
            const data = await res.json();
            setAllPokemons((currentList) => [...currentList, data]);
            await allPokemons.sort((a, b) => a.id - b.id);
          });
        }
        createPokemonObject(data.results);
      };
      useEffect(() => {
        getAllPokemons();
      }, []);
    return(
            <div className="app-container">
                <div className="pokemon-container">
                    <div className="all-container">
                        {allPokemons.map((pokemonStats)=>(
                            <PokemonCard/>
                        ))}
                    </div>
                </div>
            </div>
        )        
   }