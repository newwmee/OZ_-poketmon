import { useEffect } from "react";
import "./App.scss";
import { useDispatch, useSelector } from "react-redux";
import { fetchMultiplePoketmonById } from "./RTK/thunk";

function App() {
  const ditpatch = useDispatch();
  const poketmonData = useSelector((state) => state.poketmon);
  console.log(poketmonData);

  useEffect(() => {
    ditpatch(fetchMultiplePoketmonById(151));
  }, []);
  return (
    <>
      <h1 className="text-[40px]">포켓몬 도감</h1>
    </>
  );
}

export default App;
