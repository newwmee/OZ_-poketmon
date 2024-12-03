import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import { selectPokemonById } from "../RTK/selector";
import FavoriteButton from "../component/FavoriteButton";
import FlipCard from "../component/FlipCard";

export default function Detail() {
  const { pokemonId } = useParams(); // 포켓몬 id값 받아오기
  const pokemon = useSelector(selectPokemonById(Number(pokemonId)));
  return (
    <div className="bg-white flex flex-col justify-center items-center py-[30px] px-[60px] rounded-[10px] border-b-[8px] border-r-[8px] border-black">
      <div className="text-[30px] mb-[10px]">
        {pokemon.name}
        <FavoriteButton pokemonId={Number(pokemonId)} />
      </div>
      <div className="whitespace-pre-wrap text-center">
        {pokemon.description}
      </div>
      <FlipCard front={pokemon.front} back={pokemon.back} />
    </div>
  );
}
