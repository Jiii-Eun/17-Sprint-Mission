import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const commonStyled = `height: auto;
  padding: var(--spacing-sm) var(--spacing-lg);
  background-color: var(--primary-color);
  border-radius: var(--border-radius-xs);
  border: none;
  text-align: center;
  font-weight: 600;
  font-size: var(--font-size-400);
  color: var(--gray-100-color);`;

const StyledButton = styled.button`
  ${commonStyled}
`;
const StyledLink = styled(Link)`
  ${commonStyled}
`;
const StyledDiv = styled.div`
  ${commonStyled}
`;

export default function Button({ text, onClick, as = "button", link = "" }) {
  switch (as) {
    case "button":
      return <StyledButton>{text}</StyledButton>;
    case "a":
      return <StyledLink to={link}>{text}</StyledLink>;
    case "div":
      return <StyledDiv>{text}</StyledDiv>;
  }
}
