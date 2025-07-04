import { Outlet } from 'react-router-dom';
import styled from 'styled-components';

import Footer from '@/components/layout/Footer';
import Header from '@/components/layout/Header';
import { GlobalStyle } from '@/styles/global';

export default function MainTemplate() {
  return (
    <>
      <GlobalStyle />
      <Header />
      <Container>{<Outlet />}</Container>
      <Footer />
    </>
  );
}
const Container = styled.div`
  margin-top: var(--spacing-xxxl);
`;
