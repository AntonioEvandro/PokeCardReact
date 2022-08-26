const CardPokemon = function (props) {
  return (
    <div className="card ${tipo_base}">
      <span className="id ${tipo_base}">#${pokemon?.id}</span>
    </div>
  );
};
export default CardPokemon;
