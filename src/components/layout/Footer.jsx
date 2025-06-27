import { Link } from "react-router-dom";
import "@styles/components/Footer.css";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer__container">
        <span className="footer__copyright">©codeit - 2024</span>
        <div className="footer__info">
          <Link to="privacy" aria-label="개인정보 관리 정책 화면으로 이동">
            Privacy Policy
          </Link>
          <Link to="faq" aria-label="FAQ 화면으로 이동">
            FAQ
          </Link>
        </div>
        <div className="footer__sns-icons">
          <Link
            to="https://www.facebook.com"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="페이스북 페이지로 이동"
          >
            <img
              className="footer__sns-icon"
              src="@assets/icons/ic_facebook.svg"
              alt="페이스북 아이콘"
            />
          </Link>
          <Link
            to="https://www.x.com"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="트위터 페이지로 이동"
          >
            <img
              className="footer__sns-icon"
              src="@assets/icons/ic_twitter.svg"
              alt="트위터 아이콘"
            />
          </Link>
          <Link
            to="https://www.youtube.com"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="유튜브 페이지로 이동"
          >
            <img
              className="footer__sns-icon"
              src="@assets/icons/ic_youtube.svg"
              alt="유튜브 아이콘"
            />
          </Link>
          <Link
            to="https://www.instagram.com"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="인스타그램 페이지로 이동"
          >
            <img
              className="footer__sns-icon"
              src="@assets/icons/ic_instagram.svg"
              alt="인스타그램 아이콘"
            />
          </Link>
        </div>
      </div>
    </footer>
  );
}
