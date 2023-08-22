export default function ChangePokemonButtons({prevPokemon, nextPokemon, pageNo, totalPokemon}) {
    return (
        <div className="change-pokemon">
            <button onClick={prevPokemon} id="prev-pokemon">Prev</button>
            <div id="change-page-descriptions">
                <p>Page: {pageNo}</p>
                <p>{pageNo * 20} / {totalPokemon}</p>
            </div>
            <button onClick={nextPokemon} id="next-pokemon">Next</button>
        </div>
    );
}