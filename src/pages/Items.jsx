import AllItems from "@/components/Items/AllItemsSection";
import BestItems from "@/components/Items/BestItemsSection";
import { device } from "@/styles/media";
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
  padding: var(--spacing-xxl) var(--spacing-xl);
  @media ${device.tablet} {
    width: 100%;
  }
  @media ${device.desktop} {
    margin: 0 auto;
    padding: var(--spacing-xxl) 0;
    max-width: 1200px;
  }
`;
