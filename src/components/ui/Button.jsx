import { Link } from 'react-router-dom';
import styled, { css } from 'styled-components';

const commonStyles = css`
  height: auto;
  padding: ${({ theme }) => theme.spacing.sm} ${({ theme }) => theme.spacing.lg};
  background-color: ${({ theme }) => theme.colors.primary};
  border-radius: ${({ theme }) => theme.borderRadius.xs};
  border: none;
  text-align: center;
  font-weight: 600;
  font-size: ${({ theme }) => theme.fontSize.sm};
  color: ${({ theme }) => theme.colors.gray100};
`;
const StyledButton = styled.button`
  ${commonStyles}
  &:disabled {
    background-color: ${({ theme }) => theme.colors.gray400};
  }
`;
const StyledDiv = styled.div`
  ${commonStyles}
`;
const StyledLink = styled(Link)`
  ${commonStyles}
`;
export default function Button({
  text,
  onClick = () => {},
  as = 'button',
  link = '',
  disabled = false,
}) {
  switch (as) {
    case 'button':
      return (
        <StyledButton onClick={onClick} disabled={disabled}>
          {text}
        </StyledButton>
      );
    case 'a':
      return (
        <StyledLink to={link} aria-label={text}>
          {text}
        </StyledLink>
      );
    case 'div':
      return <StyledDiv onClick={onClick}>{text}</StyledDiv>;
  }
}
