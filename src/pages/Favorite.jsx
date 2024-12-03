import { Card } from "../component/Card";
import { selectFavoritePokemons } from "../RTK/selector";
import { useSelector } from "react-redux";

export default function Favorite() {
  const pokemon = useSelector(selectFavoritePokemons);
  return (
    <>
      {pokemon.map((el) => (
        <Card key={el.id} pokemon={el} />
      ))}
    </>
  );
}
