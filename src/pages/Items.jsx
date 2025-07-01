import AllItems from "@/components/Items/AllItemsSection";
import BestItems from "@/components/Items/BestItemsSection";
import styled from "styled-components";

export default function Items() {
  return (
    <Container>
      <BestItems />
      <AllItems />
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
