import { useNavigate } from "react-router-dom";
import styled from "styled-components";

const CardContainer = styled.section`
  width: 150px;
  border: 1px solid gray;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 10px;
  padding-bottom: 10px;
  border-radius: 10px;

  img {
    width: 120px;
  }
`;

export const Card = ({ poketmon }) => {
  const navigate = useNavigate(); //상세설명페이지로 이동(detail의 poketmenid로 이동)
  return (
    <CardContainer onClick={() => navigate(`/detail/${pokemon.id}}`)}>
      <img src={pokemon.front} />
      <div>{pokemon.name}</div>
    </CardContainer>
  );
};
