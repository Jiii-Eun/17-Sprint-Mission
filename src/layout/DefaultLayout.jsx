import { Outlet } from "react-router-dom";
import Header from "../components/header_footer/Header";

export default function DefaultLayout() {
  return (
    <>
      <Header />
      <Outlet />
    </>
  );
}
