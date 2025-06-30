import styled from "styled-components";
import Item from "./Item";
import Button from "../common/Button";
import SearchIcon from "@/assets/icons/ic_search.svg";
import ArrowDownIcon from "@/assets/icons/ic_arrow_down.svg";
export default function AllItems() {
  const items = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  return (
    <Container>
      <Head>
        <Title>모든 상품</Title>
        <Control>
          <SearchWrapper>
            <Search placeholder="검색할 상품을 입력해주세요" />
            <img src={SearchIcon} />
          </SearchWrapper>
          <Button text="상품 등록하기" />
          <OrderMenu>
            <span>최신순</span>
            <img src={ArrowDownIcon} />
          </OrderMenu>
          <OrderOption></OrderOption>
          <OrderOption></OrderOption>
        </Control>
      </Head>
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
const Head = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: var(--spacing-lg);
`;
const Title = styled.h2``;
const Control = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 12px;
`;
const SearchWrapper = styled.div`
  position: relative;
  & > img {
    position: absolute;
    left: 11px;
    top: 11px;
    width: 20px;
  }
`;
const Search = styled.input`
  width: 20rem;
  height: 2.625rem;
  background-color: var(--gray-100-color);
  padding: var(--spacing-sm) var(--spacing-xl);
  border-radius: var(--border-radius-sm);
  &::placeholder {
    color: var(--gray-400-color);
  }
`;
const OrderMenu = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  border: 1px solid var(--gray-200-color);
  border-radius: var(--border-radius-sm);
  width: 8rem;
  padding: 12px 20px;
  font-weight: 400;
`;
const OrderOption = styled.div``;
const Items = styled.ul`
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  gap: var(--spacing-xxl) var(--spacing-lg);
`;
const ItemWrapper = styled.div`
  width: 221px;
`;
