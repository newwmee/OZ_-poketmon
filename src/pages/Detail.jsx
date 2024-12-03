import { useParams } from "react-router-dom";

export default function Detail() {
  const { pokemonId } = useParams(); //포켓몬 id값 받아오기
  return <div>Detail : {pokemonId} </div>;
}
