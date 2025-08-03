import { useState } from "react";

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
    <input
      type="text"
      placeholder="검색할 상품을 입력해주세요."
      onChange={handleChange}
      onKeyDown={handleKeyDown}
    />
  );
}
