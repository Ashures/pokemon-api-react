export default function ChangePokemonButtons({prevPokemon, nextPokemon}) {
    return (
        <div className="change-pokemon">
            <button onClick={prevPokemon} id="prev-pokemon">Prev</button>
            <button onClick={nextPokemon} id="next-pokemon">Next</button>
        </div>
    );
}