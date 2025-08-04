import { useState } from "react";
import styled from "styled-components";

export default function ItemsSearch({ setSearchInput }) {
  const [inputValue, setInputValue] = useState("");

  //입력값 받아오기
  const handleChange = (e) => {
    setInputValue(e.target.value);
  };

  //입력값 보내기
  const handleKeyDown = (e) => {
    if (e.key === "Enter") {
      setSearchInput(inputValue);
    }
  };

  return (
    <Div>
      <input
        type="text"
        placeholder="검색할 상품을 입력해주세요."
        onChange={handleChange}
        onKeyDown={handleKeyDown}
      />
      <button onClick={handleKeyDown}>검색</button>
    </Div>
  );
}

const Div = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Input = styled.input``;
