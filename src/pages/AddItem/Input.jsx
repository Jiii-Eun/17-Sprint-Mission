import styled from 'styled-components';

export default function Input({ placeholder, onEnter = () => {} }) {
  return (
    <StyledInput placeholder={placeholder} onKeyDown={onEnter}></StyledInput>
  );
}
const StyledInput = styled.input`
  height: 2.625rem;
  width: 100%;
  border-radius: ${({ theme }) => theme.borderRadius.sm};
  background-color: ${({ theme }) => theme.colors.gray100};
  padding: ${({ theme }) => theme.spacing.md} ${({ theme }) => theme.spacing.lg};
  &::placeholder {
    color: ${({ theme }) => theme.colors.gray400};
  }
`;
