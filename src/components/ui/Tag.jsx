import styled from 'styled-components';

import DeleteIcon from '@/assets/icons/ic_X.svg';

export default function Tag({
  text = '',
  canDelete = false,
  onDeleteClick = () => {},
}) {
  return (
    <Container>
      <span>#{text}</span>
      {canDelete && (
        <Button onClick={onDeleteClick}>
          <DeleteIcon />
        </Button>
      )}
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 8px;
  background-color: ${({ theme }) => theme.colors.gray100};
  padding: ${({ theme }) => `${theme.spacing.xs} ${theme.spacing.md}`};
  font-weight: 300;
  border-radius: 26px;
`;
const Button = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
`;
