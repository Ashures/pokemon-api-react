import ChangePokemonButtons from "./ChangePokemonButtons.jsx";
import PokemonCard from "./PokemonCard.jsx";

export default function PokemonList({pokemon, prevPokemon, nextPokemon}) {
    return (
        <div className="pokemon-list-frame">
            <ChangePokemonButtons prevPokemon={prevPokemon} nextPokemon={nextPokemon} />
            <div className="pokemon-list">
                {pokemon.map(p => (
                    <PokemonCard name={p} />
                ))}
            </div>
        </div>
    );
}