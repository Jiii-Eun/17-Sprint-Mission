import React from "react";
import styled from "styled-components";

export default function Button({ text, onClick }) {
  return <Wrapper onClick={onClick}>{text}</Wrapper>;
}
const Wrapper = styled.button`
  height: auto;
  padding: var(--spacing-sm) var(--spacing-lg);
  background-color: var(--primary-color);
  border-radius: var(--border-radius-xs);
  border: none;
  text-align: center;
  font-weight: 600;
  font-size: var(--font-size-400);
  color: var(--gray-100-color);
`;
