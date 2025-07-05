import styled from 'styled-components';

export default function Input({ placeholder }) {
  return <StyledInput placeholder={placeholder}></StyledInput>;
}
const StyledInput = styled.input`
  height: 2.625rem;
  width: 100%;
  border-radius: var(--border-radius-sm);
  background-color: var(--gray-100-color);
  padding: var(--spacing-md) var(--spacing-lg);
  &::placeholder {
    color: var(--gray-400-color);
  }
`;
