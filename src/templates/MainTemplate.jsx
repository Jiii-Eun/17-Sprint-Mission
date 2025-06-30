import { Outlet } from "react-router-dom";
import Header from "../components/layout/Header";
import Footer from "../components/layout/Footer";
import styled from "styled-components";
import { GlobalStyle } from "@/styles/common/global";

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
  margin-top: 70px;
`;
