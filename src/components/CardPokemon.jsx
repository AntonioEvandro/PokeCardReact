const CardPokemon = function (props) {
  return (
    <div className="card ${tipo_base}">
      <span className="id ${tipo_base}">#${pokemon?.id}</span>
      <img
        src="${pokemon?.sprites.other.dream_world.front_default}"
        alt=""
        className="photo"
      />
      <span className="name ${tipo_base}">${pokemon?.name}</span>
      <ul className="list_types">${tipos}</ul>
    </div>
  );
};

export default CardPokemon;
