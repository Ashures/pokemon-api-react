export default function ChangePokemonButtons({prevPokemon, nextPokemon, pageNo, totalPokemon}) {
    return (
        <div className="change-pokemon">
            <button onClick={prevPokemon} id="prev-pokemon">prev</button>
            <div id="change-page-descriptions">
                <p>page: {pageNo}</p>
                <p>{pageNo * 20 > totalPokemon? totalPokemon : pageNo * 20} / {totalPokemon}</p>
            </div>
            <button onClick={nextPokemon} id="next-pokemon">next</button>
        </div>
    );
}