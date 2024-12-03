import { useSelector } from "react-redux";
import { Card } from "../component/Card";

//App.jsx에서 만든포캣몬정보 가져오기
export default function Main() {
  const poketmonData = useSelector((state) => state.poketmon);

  return (
    <>
      {poketmonData.data.map((el) => (
        <Card key={el.id} poketmon={el} />
      ))}
    </>
  );
}
