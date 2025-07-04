import styled from 'styled-components';

import Header from '@/components/layout/Header';
import { device } from '@/styles/media';

export default function AddItem() {
  return (
    <>
      <Header />
      <Container>
        <div>AddItem</div>
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
