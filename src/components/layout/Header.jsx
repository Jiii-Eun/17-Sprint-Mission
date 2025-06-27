import { Link, NavLink } from "react-router-dom";
import navbarLogo from "@/assets/imgs/panda_icon_small.svg";
import "@/styles/components/Header.css";
import "@/styles/common/tokens.css";

function getLinkStyle({ isActive }) {
  return {
    color: isActive ? "#3692FF" : "#4b5563",
  };
}
export default function Header() {
  return (
    <header className="header">
      <nav className="navbar">
        <div className="navbar__logo-wrapper">
          <img className="navbar__logo" src={navbarLogo} alt="판다마켓 로고" />
          <h1 className="navbar__title">
            <Link to={"/"} aria-label="홈으로 이동">
              판다마켓
            </Link>
          </h1>
        </div>
        <ul className="navbar__list">
          <li>자유게시판</li>
          <li>
            <NavLink to="/items" style={getLinkStyle}>
              중고마켓
            </NavLink>
          </li>
        </ul>
        <Link
          className="navbar__login-btn"
          to="/login"
          aria-label="로그인 화면으로 이동"
        >
          로그인
        </Link>
      </nav>
    </header>
  );
}
