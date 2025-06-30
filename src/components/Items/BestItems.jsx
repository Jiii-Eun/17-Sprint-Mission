import styled from "styled-components";
import Item from "./Item";

export default function BestItems() {
  const items = [1, 2, 3, 4];
  return (
    <Container>
      <Title>베스트 상품</Title>
      <Items>
        {items.map((item) => (
          <ItemWrapper>
            <Item
              title={"아이패드"}
              price={"500000"}
              like="200"
              imgUrl={
                "https://hips.hearstapps.com/hmg-prod/images/apple-ipad-mini-2024-review-lead-672a0d53e55b6.jpg?crop=0.6666666666666666xw:1xh;center,top&resize=640:*"
              }
            />
          </ItemWrapper>
        ))}
      </Items>
    </Container>
  );
}
const Container = styled.div``;
const Title = styled.h2`
  margin-bottom: 25px;
`;

const Items = styled.ul`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  gap: 15px;
`;
const ItemWrapper = styled.div`
  width: 282px;
`;
