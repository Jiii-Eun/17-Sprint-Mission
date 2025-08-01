import styled from 'styled-components';
import SearchIcon from '@/assets/icons/ic_search.svg';

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
    left: 10px;
    top: 10px;
    width: ${({ theme }) => theme.fontSize.lg};
    height: ${({ theme }) => theme.fontSize.lg};
  }
`;
const Input = styled.input`
  width: 100%;
  border-radius: ${({ theme }) => theme.borderRadius.sm};
  background-color: ${({ theme }) => theme.colors.gray100};
  padding: ${({ theme }) => theme.spacing.sm} 40px;
  &::placeholder {
    color: ${({ theme }) => theme.colors.gray400};
  }
`;
