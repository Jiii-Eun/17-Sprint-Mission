import AllItems from "@/components/Items/AllItems";
import BestItems from "@/components/Items/BestItems";
import styled from "styled-components";
import LeftArrowIcon from "@/assets/icons/ic_arrow_left.svg";
import RightArrowIcon from "@/assets/icons/ic_arrow_right.svg";
export default function Items() {
  return (
    <Container>
      <BestItems />
      <AllItems />
      <PageCounter>
        <Counter>
          <Icon src={LeftArrowIcon} />
        </Counter>
        <Counter isActive={true}>1</Counter>
        <Counter>2</Counter>
        <Counter>3</Counter>
        <Counter>4</Counter>
        <Counter>5</Counter>
        <Counter>
          <Icon src={RightArrowIcon} />
        </Counter>
      </PageCounter>
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  gap: var(--spacing-xxl);
  width: 1200px;
  margin: 0 auto;
  padding: var(--spacing-xxl) 0;
`;
const PageCounter = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: var(--spacing-xs);
`;
const Counter = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: ${(props) =>
    props.isActive ? "var(--primary-color)" : "var(--white-color)"};
  color: ${(props) =>
    props.isActive ? "var(--gray-50-color)" : "var(--gray-500-color)"};
  border-radius: var(--border-radius-lg);
  border: 1px solid var(--gray-200-color);
  width: 2.5rem;
  height: 2.5rem;
  padding: 12.5px;
  font-weight: 600;
  font-size: var(--font-size-400);
`;
const Icon = styled.img`
  width: 16px;
  height: 16px;
`;
