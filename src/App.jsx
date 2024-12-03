import "./App.scss";
import { lazy, Suspense, useEffect } from "react";
import { useDispatch } from "react-redux";
import { fetchMultiplePokemonById } from "./RTK/thunk";
import { Routes, useNavigate } from "react-router-dom";
import { Route } from "react-router-dom";
import { Link } from "react-router-dom";

const Main = lazy(() => import("./pages/Main"));
const Detail = lazy(() => import("./pages/Detail"));
const Search = lazy(() => import("./pages/Search"));
const Favorite = lazy(() => import("./pages/Favorite"));

function App() {
  const navigate = useNavigate();
  const ditpatch = useDispatch();
  useEffect(() => {
    ditpatch(fetchMultiplePokemonById(151));
  }, []);

  return (
    <>
      <h1 className="border-t-[30px] border-t-[red] bg-black text-white text-[40px] text-center">
        포켓몬 도감
      </h1>
      <nav className="py-[10px] border-b-[3px] border-b-black flex gap-[20px] justify-center">
        <Link to={"/"}>메인</Link>
        <Link to={"/favorite"}>찜목록</Link>
        <div>
          <input
            onChange={(e) => navigate(`/search?pokemon=${e.target.value}`)}
            className="w-[120px] border-b border-[darkgray] justify-center px-[20px]"
          />
          <span>🔎</span>
        </div>
      </nav>
      <main className="pb-[20px] bg-[gray] flex justify-center flex-wrap gap-[20px] pt-[20px]">
        <Suspense fallback={<div>불러오는 중...</div>}>
          <Routes>
            <Route path={"/"} element={<Main />} />
            <Route path={"/detail/:pokemonId"} element={<Detail />} />
            <Route path={"/search"} element={<Search />} />
            <Route path={"/favorite"} element={<Favorite />} />
          </Routes>
        </Suspense>
      </main>
    </>
  );
}

export default App;
