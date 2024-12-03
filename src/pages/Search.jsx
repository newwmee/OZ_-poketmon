import { useSelector } from "react-redux";
import { useSearchParams } from "react-router-dom";
import { selectPokemonByRegExp } from "../RTK/selector";
import { Card } from "../component/Card";
import { getRegExp } from "korean-regexp";

export default function Search() {
  const [searchparams] = useSearchParams();
  const param = searchparams.get("pokemon");
  const reg = getRegExp(param);

  const pokemon = useSelector(selectPokemonByRegExp(reg));

  return (
    <>
      {pokemon.map((el) => (
        <Card key={el.id} pokemon={el} />
      ))}
    </>
  );
}
