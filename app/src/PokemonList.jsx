import ChangePokemonButtons from "./ChangePokemonButtons.jsx";
import PokemonCard from "./PokemonCard.jsx";

export default function PokemonList({pokemon, prevPokemon, nextPokemon, pageNo, totalPokemon, clickPokemon, closeFocusPokemon}) {
    return (
        <>
            <div id="focus-pokemon-popup">
                <div onClick={closeFocusPokemon} id="focus-pokemon-bg"></div>
                <div id="focus-pokemon-card">
                    <img src="" alt="" id="focus-pokemon-card-img"/>
                    <h2 id="focus-pokemon-card-title">Whoops! Something went wrong!</h2>
                </div>
            </div>
            <div className="pokemon-list-frame">
                <ChangePokemonButtons 
                    prevPokemon={prevPokemon} 
                    nextPokemon={nextPokemon} 
                    pageNo={pageNo}  
                    totalPokemon={totalPokemon} 
                />
                <div className="pokemon-list">
                    {pokemon.map(p => (
                        <PokemonCard name={p} clickPokemon={clickPokemon} />
                    ))}
                </div>
            </div>
        </>
    );
}