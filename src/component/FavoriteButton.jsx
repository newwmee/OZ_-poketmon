import { useDispatch, useSelector } from "react-redux";
import { favoriteSlice } from "../RTK/slice";

export default function FavoriteButton({ pokemonId }) {
  const isFavorite = useSelector((state) =>
    state.favorite.some((item) => item === pokemonId)
  );
  const dispatch = useDispatch();

  return (
    <button
      onClick={(e) => {
        e.stopPropagation();
        dispatch(
          isFavorite
            ? favoriteSlice.actions.removeFromFavorite({ pokemonId })
            : favoriteSlice.actions.addToFavorite({ pokemonId })
        );
        //순서가 바뀌어도 기능문제는 없음 다만 현재상황에 따라 약속된 룰로써 반대로 적용함 on-remove/off-add
      }}
      className={isFavorite ? "text-[red]" : ""}
    >
      {isFavorite ? "♥︎" : "♡"}
    </button>
  );
}
