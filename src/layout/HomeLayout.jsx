import { Outlet } from "react-router-dom";
import HomeHeader from "../components/header_footer/HomeHeader";
import HomeFooter from "../components/header_footer/HomeFooter";

export default function HomeLayout() {
  return (
    <>
      <HomeHeader />
      <Outlet />
      <HomeFooter />
    </>
  );
}
