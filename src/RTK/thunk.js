import { createAsyncThunk } from "@reduxjs/toolkit";

export const fetchMultiplePokemonById = createAsyncThunk(
  "pokemon/fetchMultiplePokemonById",
  async (maxPokemonId) => {
    const numberArray = Array.from({ length: maxPokemonId }, (_, i) => i + 1);
    //arrray라는 객체를 불러다가 배열을 만들겠다는 from메서드 불러옴
    //length객체 -길이 151 , 요소들이 각각 무엇이 될지는 두번째 인자로 함수식으로 설명
    // 함수식에서 첫번째 인자 언더바처리, 두번째 인자 인덱스값 (배열고차함수-항상 두번째 인자로 인덱스값)
    // 0부터 시작 i+1 한 값을 배열에 넣어준다 -> 인덱스 0,1,2, 로 올라감 배열안에 [1,2,3,...151]까지의 숫자배열 만들어짐

    //비동기처리
    const fetchAPI = async (pokemonId) => {
      const response = await fetch(
        `https://pokeapi.co/api/v2/pokemon-species/${pokemonId}/`
      );
      const data = await response.json(); //요청이 돌아오면 json을 읽을 수 있는 형태로 데이터 받기
      //가지고 온 데이터 확인
      //names라는 배열안에서 무언갈 찾는데 el(요소)의 language라는 key의 name이 ko인것

      const pokemonData = {
        id: pokemonId,
        name: data.names.find((el) => el.language.name === "ko").name,
        description: data.flavor_text_entries.find(
          (el) => el.language.name === "ko"
        ).flavor_text,
        front: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${pokemonId}.png`,
        back: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/${pokemonId}.png`,
      };
      return pokemonData;
    };

    return await Promise.all(numberArray.map((el) => fetchAPI(el)));
  }
);
