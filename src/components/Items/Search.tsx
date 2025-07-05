import styled from 'styled-components';
import SearchIcon from '@/assets/icons/ic_search.svg';
import { useState } from 'react';

export default function Search({ onSubmit }) {
  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(e.target['search'].value);
  };
  return (
    <Form onSubmit={handleSubmit}>
      <SearchIcon />
      <Input name='search' placeholder='검색할 상품을 입력해주세요' />
    </Form>
  );
}
const Form = styled.form`
  position: relative;
  max-width: 24rem;
  height: 2.625rem;
  & > svg {
    position: absolute;
    left: 7px;
    top: 7px;
    width: var(--font-size-600);
    height: var(--font-size-600);
  }
`;
const Input = styled.input`
  width: 100%;
  border-radius: var(--border-radius-sm);
  background-color: var(--gray-100-color);
  padding: var(--spacing-sm) 40px;
  &::placeholder {
    color: var(--gray-400-color);
  }
`;
