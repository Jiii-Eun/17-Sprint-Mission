import styled from 'styled-components';

export default function TextArea({ placeholder }) {
  return <StyledTextArea placeholder={placeholder} />;
}

const StyledTextArea = styled.textarea`
  height: 17.625rem;
  width: 100%;
  border-radius: ${({ theme }) => theme.borderRadius.sm};
  background-color: ${({ theme }) => theme.colors.gray100};
  padding: ${({ theme }) => theme.spacing.md} ${({ theme }) => theme.spacing.lg};
  &::placeholder {
    color: ${({ theme }) => theme.colors.gray400};
    font-size: ${({ theme }) => theme.fontSize.sm};
  }
`;
