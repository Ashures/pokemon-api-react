import { useEffect, useState } from "react";
import PokemonList from "./PokemonList.jsx";
import TitleScreen from "./TitleScreen.jsx";
import "./main.css";
import axios from "axios";

export default function App() {
  const [pokemon, setPokemon] = useState([]);
  const [currentPage, setCurrentPage] = useState("https://pokeapi.co/api/v2/pokemon?limit=40");
  const [nextPage, setNextPage] = useState();
  const [prevPage, setPrevPage] = useState();

  useEffect(() => {
    axios.get(currentPage)
    .then(res => {
      setPokemon(res.data.results.map(p => p.name));
      setNextPage(res.data.next);
      setPrevPage(res.data.previous);
    })
    .catch(error => {
      console.error(error);
    });
  }, [currentPage]);

  function clickPrevPokemon() {
    setCurrentPage(prevPage);
  }
  
  function clickNextPokemon() {
    setCurrentPage(nextPage);
  }

  return (
    <div className="main">
      <TitleScreen title="Pokémon" />
      <PokemonList pokemon={pokemon} prevPokemon={clickPrevPokemon} nextPokemon={clickNextPokemon} />
    </div>
  );
}
