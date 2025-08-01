import styled from 'styled-components';

import LikeIcon from '@/assets/icons/ic_heart.svg';
import ItemImg from '@/components/ui/ItemImg';

export default function ItemBox({ title, price, like, imgUrl, imgAlt }) {
  const localePriceString = Number(price).toLocaleString('ko-KR');
  return (
    <Container>
      <ItemImg imgUrl={imgUrl} alt={imgAlt} />
      <Title>{title}</Title>
      <Price>{localePriceString}원</Price>
      <LikeWrapper>
        <LikeIcon aria-label='좋아요 버튼' />
        <Like>{like}</Like>
      </LikeWrapper>
    </Container>
  );
}
const Container = styled.li`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: flex-start;
  gap: ${({ theme }) => theme.spacing.sm};
  width: 100%;
  color: ${({ theme }) => theme.colors.gray800};
`;
const Title = styled.span`
  margin-top: ${({ theme }) => theme.spacing.xs};
  font-size: ${({ theme }) => theme.fontSize.sm};
  font-weight: 500;
`;
const Price = styled.span`
  font-size: ${({ theme }) => theme.fontSize.sm};
  font-weight: 700;
`;
const LikeWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 4px;
  & > img {
    width: ${({ theme }) => theme.fontSize.sm};
  }
`;
const Like = styled.div`
  font-size: ${({ theme }) => theme.fontSize.xs};
  font-weight: 500;
  color: ${({ theme }) => theme.colors.gray600};
`;
