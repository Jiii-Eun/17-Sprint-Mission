import styled from "styled-components";
import ItemImg from "../common/ItemImg";
import LikeIcon from "@/assets/icons/ic_heart.svg";

export default function ItemBox({ title, price, like, imgUrl }) {
  const localePriceString = Number(price).toLocaleString("ko-KR");
  return (
    <Container>
      <ItemImg imgUrl={imgUrl} />
      <Title>{title}</Title>
      <Price>{localePriceString}원</Price>
      <LikeWrapper>
        <img src={LikeIcon} />
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
  gap: var(--spacing-sm);
  width: 100%;
  color: var(--gray-800-color);
`;
const Title = styled.span`
  margin-top: var(--spacing-xs);
  font-size: var(--font-size-350);
  font-weight: 500;
`;
const Price = styled.span`
  font-size: var(--font-size-400);
  font-weight: 700;
`;
const LikeWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 4px;
  & > img {
    width: var(--font-size-400);
  }
`;
const Like = styled.div`
  font-size: var(--font-size-300);
  font-weight: 500;
  color: var(--gray-600-color);
`;
