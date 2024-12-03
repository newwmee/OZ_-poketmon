import { useEffect } from "react";
import "./App.scss";
import { useDispatch, useSelector } from "react-redux";
import { fetchMultiplePoketmonById } from "./RTK/thunk";
import { Link, Route, Routes } from "react-router-dom";
import Main from "./pages/Main";
import Detail from "./pages/Detail";
import Favorite from "./pages/Favorite";
import Search from "./pages/Search";

function App() {
  const ditpatch = useDispatch();
  const poketmonData = useSelector((state) => state.poketmon);
  console.log(poketmonData);

  useEffect(() => {
    ditpatch(fetchMultiplePoketmonById(151));
  }, []);
  return (
    <>
      <h1 className="text-[40px] text-center">포켓몬 도감</h1>
      <nav>
        <Link to={"/"}>메인</Link>
        <Link to={"/detail"}>상세정보</Link>
        <Link to={"/search"}>검색</Link>
        <Link to={"/favorite"}>찜목록</Link>
      </nav>
      <Routes>
        <Route path={"/"} element={<Main />} />
        <Route path={"/detail/:poketmon"} element={<Detail />} />
        <Route path={"/search"} element={<Search />} />
        <Route path={"/favorite"} element={<Favorite />} />
      </Routes>
    </>
  );
}

export default App;
