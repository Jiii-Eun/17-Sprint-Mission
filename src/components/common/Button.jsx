import { Link } from "react-router-dom";
import styled from "styled-components";

const commonStyles = `
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
const StyledButton = styled.button`
  ${commonStyles}
`;
const StyledLink = styled(Link)`
  ${commonStyles}
`;
export default function Button({
  text,
  onClick = () => {},
  as = "button",
  link = "",
}) {
  switch (as) {
    case "button":
      return <StyledButton onClick={onClick}>{text}</StyledButton>;
    case "a":
      return (
        <StyledLink to={link} aria-label={text}>
          {text}
        </StyledLink>
      );
    case "div":
      return (
        <StyledButton as={"div"} onClick={onClick}>
          {text}
        </StyledButton>
      );
  }
}
