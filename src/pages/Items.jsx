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
  gap: ${({ theme }) => theme.spacing['2xl']};
  padding: ${({ theme }) => `${theme.spacing['2xl']} ${theme.spacing.xl}`};
  margin-top: ${({ theme }) => theme.spacing.header};
  @media ${device.TABLET} {
    width: 100%;
  }
  @media ${device.DESKTOP} {
    margin-left: auto;
    margin-right: auto;
    padding: ${({ theme }) => `${theme.spacing['2xl']} 0`};
    max-width: 1200px;
  }
`;
