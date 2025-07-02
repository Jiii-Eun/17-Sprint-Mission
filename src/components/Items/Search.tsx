import styled from "styled-components";
import SearchIcon from "@/assets/icons/ic_search.svg";
import { useState } from "react";

export default function Search({ onSubmit }) {
  const [value, setValue] = useState("");
  const handleChange = (e) => {
    setValue(e.target.value);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(value);
  };
  return (
    <Form onSubmit={handleSubmit}>
      <Input
        name="itemSearch"
        value={value}
        onChange={handleChange}
        placeholder="검색할 상품을 입력해주세요"
      />
    </Form>
  );
}
const Form = styled.form`
  max-width: 24rem;
  height: 2.625rem;
`;
const Input = styled.input`
  width: 100%;
  background-color: var(--gray-100-color);
  background-image: url("${SearchIcon}");
  background-position: 12px 50%;
  background-repeat: no-repeat;
  background-size: 20px;
  border-radius: var(--border-radius-sm);
  padding: var(--spacing-sm) var(--spacing-xl);
  &::placeholder {
    color: var(--gray-400-color);
  }
`;
