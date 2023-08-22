import { useEffect, useState } from "react";
import PokemonList from "./PokemonList.jsx";
import TitleScreen from "./TitleScreen.jsx";
import "./main.css";
import axios from "axios";

export default function App() {
  const [pokemon, setPokemon] = useState([]);
  const [totalPokemon, setTotalPokemon] = useState(0);
  const [currentPage, setCurrentPage] = useState("https://pokeapi.co/api/v2/pokemon");
  const [nextPage, setNextPage] = useState();
  const [prevPage, setPrevPage] = useState();
  const [pageNumber, setPageNumber] = useState(1);
  const [focusImg, setFocusImg] = useState("");
  const [focusTitle, setFocusTitle] = useState("");

  useEffect(() => {
    axios.get(currentPage)
    .then(res => {
      setPokemon(res.data.results.map(p => p.name));
      setTotalPokemon(res.data.count);
      setNextPage(res.data.next);
      setPrevPage(res.data.previous);
    })
    .catch(error => {
      console.error(error);
    });
  }, [currentPage]);

  function clickPrevPokemon() {
    if (pageNumber > 1) {
      setCurrentPage(prevPage);
      setPageNumber(pageNumber - 1);
    }
  }
  
  function clickNextPokemon() {
    if (pageNumber < totalPokemon / 20) {
      setCurrentPage(nextPage);
      setPageNumber(pageNumber + 1);
    }
  }

  function clickPokemon(event) {
    const target = event.target;
    const focusPopup = document.getElementById("focus-pokemon-popup");
    const focusImg = document.getElementById("focus-pokemon-card-img");
    const focusTitle = document.getElementById("focus-pokemon-card-title");

    focusImg.src = target.src;
    focusTitle.innerHTML = target.id;
    focusPopup.style.display = "grid";
  }

  function closeFocusPokemon() {
    const target = document.getElementById("focus-pokemon-popup");

    target.style.display = "none";
  }

  return (
    <div className="main">
      <TitleScreen title="Pokémon" />
      <PokemonList 
        pokemon={pokemon} 
        prevPokemon={clickPrevPokemon} 
        nextPokemon={clickNextPokemon} 
        pageNo={pageNumber} 
        totalPokemon={totalPokemon} 
        clickPokemon={clickPokemon}
        closeFocusPokemon={closeFocusPokemon}
      />
    </div>
  );
}
