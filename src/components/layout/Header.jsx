import { Link } from "react-router-dom";
import "@styles/components/Header.css";
export default function Header() {
  return (
    <header className="header">
      <nav className="navbar">
        <div className="navbar__logo-wrapper">
          <img
            className="navbar__logo"
            src="@assets/imgs/panda_icon_small.svg"
            alt="판다마켓 로고"
          />
          <h1 className="navbar__title">
            <Link to={"/"} aria-label="홈으로 이동">
              판다마켓
            </Link>
          </h1>
        </div>
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
