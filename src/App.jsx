import { useEffect } from "react";
import "./App.css";
import { useDispatch, useSelector } from "react-redux";
import { fetchMultiplePoketmonById } from "./RTK/thunk";

function App() {
  const ditpatch = useDispatch();
  const poketmonData = useSelector((state) => state.poketmon);
  console.log(poketmonData);

  useEffect(() => {
    ditpatch(fetchMultiplePoketmonById(151));
  }, []);
  return <></>;
}

export default App;
