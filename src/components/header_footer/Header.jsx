import { Link } from "react-router";
import pandaLogo from "@/assets/logo.png";

function Header() {
  return (
    <>
      <Link to="/" className="logo">
        <img src={pandaLogo} alt="판다로고" className="logo_img" />
        <h1>판다마켓</h1>
      </Link>
      <nav>
        <ol>
          <li>
            <Link to="/boards">자유게시판</Link>
          </li>
          <li>
            <Link to="/items">중고마켓</Link>
          </li>
        </ol>
      </nav>
      <div></div>
    </>
  );
}

export default Header;
