import { type } from "os";
import React, {useEffect,useState,useRef} from "react";
import PokemonList from "./Pokemon";
const Home=()=> {
  
  interface PokemonValues{
    url:string,
    id:number,
    key:string,
    image:string,
    name:string,
    pokemonDetails:object,
    sprites:other,
    types:Array<types>,
  };
  interface types{
    type:typeval,
  };
  interface typeval{
    name:string,
  };
  interface other{
    other: dreamworld
  }
  interface dreamworld{
    dream_world:frontdefault
  }
  interface frontdefault{
    front_default:string
  }
  
  const [pokemons,setPokemons]=useState<PokemonValues[]>([])
  const [nextUrl, setNextUrl] = useState<string>("");
  const effectran= useRef(false);

  useEffect(() => {
    if(effectran.current===false){
    const url = "https://pokeapi.co/api/v2/pokemon";
    fetchData(url);
    }
    return()=>{ effectran.current=true;}
  }, []);

    const fetchData = async (url:string) => {
      try {
        const response = await fetch(url);
        const data = await response.json();
        if (data.next !== "") {
          setNextUrl(data.next);
        } else {
          setNextUrl("");
        }
        data.results.map(async(poke:PokemonValues) => {
          await pokemonObject(poke)
          });
          }
   catch (error){
    console.log("error", error);
  }
}
  async function pokemonObject(pokemon:PokemonValues){
    const response = await fetch(pokemon.url)
    const data =  await response.json()
    console.log(data)
    setPokemons( currentList => [...currentList, data])
  }
  const loadMore = async () => {
    await fetchData(nextUrl);
  };
 
  
  console.log(pokemons)

  return(
<>
<div className="app-container">
  <h1>Pokemons</h1>
<div className="pokemon-container">
<div className="all-container" >
{pokemons && pokemons.map((pokemonStats:PokemonValues) => 
      <PokemonList
        key={pokemonStats.id}
        pokemonDetails={pokemonStats}
        id={pokemonStats.id}
        image={pokemonStats.sprites.other.dream_world.front_default}
        name={pokemonStats.name}
        type={pokemonStats.types[0].type.name}
      />)}
</div>
{nextUrl && <button className="load-more" onClick={loadMore}>Load more</button>}

</div>
</div>
      </>
  )
}

export default Home