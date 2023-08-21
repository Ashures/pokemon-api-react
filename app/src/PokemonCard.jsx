export default function PokemonCard({name}) {
    const image = `images/${name}.jpg`;

    return (
        <div className="pokemon-card">
            <div id="pokemon-icon">
                <img src={image} alt={name} />
            </div>
            <div id="pokemon-title">
                {name}
            </div>
        </div>
    );
}