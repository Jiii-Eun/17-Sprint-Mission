import styled from 'styled-components';

import AllItems from '@/components/Items/AllItemsSection';
import BestItems from '@/components/Items/BestItemsSection';
import Header from '@/components/layout/Header';
import { device } from '@/styles/media';

export default function Items() {
  return (
    <>
      <Header />
      <Container>
        <BestItems />
        <AllItems />
      </Container>
    </>
  );
}

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  gap: var(--spacing-xxl);
  padding: var(--spacing-xxl) var(--spacing-xl);
  margin-top: var(--spacing-header);
  @media ${device.tablet} {
    width: 100%;
  }
  @media ${device.desktop} {
    margin-left: auto;
    margin-right: auto;
    padding: var(--spacing-xxl) 0;
    max-width: 1200px;
  }
`;
