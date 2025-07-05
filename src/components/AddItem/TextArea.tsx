import styled from 'styled-components';

export default function TextArea({ placeholder }) {
  return <StyledTextArea placeholder={placeholder} />;
}

const StyledTextArea = styled.textarea`
  height: 17.625rem;
  width: 100%;
  border-radius: var(--border-radius-sm);
  background-color: var(--gray-100-color);
  padding: var(--spacing-md) var(--spacing-lg);
  &::placeholder {
    color: var(--gray-400-color);
    font-size: var(--font-size-400);
  }
`;
