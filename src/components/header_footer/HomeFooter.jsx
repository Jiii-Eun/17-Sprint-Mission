import { Link } from "react-router-dom";
import { snsImages } from "@/components/header_footer/snsData";

function HomeFooter() {
  return (
    <footer>
      <div className="width_container footer_container">
        <p className="company_since">©codeit - 2024</p>
        <div className="faq">
          <Link to="/privacy">Privacy Policy</Link>
          <Link to="/faq">FAQ</Link>
        </div>

        <ol className="sns_wrapper">
          {snsImages.map((sns, index) => (
            <li key={index}>
              <a href={sns.href} target="_blank">
                <img src={sns.img} alt={sns.alt} />
              </a>
            </li>
          ))}
        </ol>
      </div>
    </footer>
  );
}

export default HomeFooter;
