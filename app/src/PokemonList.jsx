import PokemonCard from "./PokemonCard.jsx";

export default function PokemonList({pokemon}) {
    return (
        <div className="pokemon-list-frame">
            <div className="change-pokemon">
                <button id="prev-pokemon">Prev</button>
                <button id="next-pokemon">Next</button>
            </div>
            <div className="pokemon-list">
                {pokemon.map(p => (
                    <PokemonCard name={p} />
                ))}
            </div>
        </div>
    );
}