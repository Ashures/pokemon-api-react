export default function PokemonCard({name, clickPokemon}) {
    const image = `https://img.pokemondb.net/artwork/avif/${name}.avif`;

    return (
        <div className="pokemon-card">
            <div id="pokemon-icon">
                <img onClick={event => clickPokemon(event)} src={image} alt={name} id={name} />
            </div>
            <div id="pokemon-title">
                {name}
            </div>
        </div>
    );
}