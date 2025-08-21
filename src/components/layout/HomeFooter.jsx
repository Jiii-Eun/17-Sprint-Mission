import { Link } from "react-router-dom";
import { snsImages } from "@/components/layout/snsData";
import { FooterStyle } from "@/components/layout/Footer.style";
import { WidthContainer } from "@/styles/commonStyle";

function HomeFooter() {
  return (
    <FooterStyle>
      <WidthContainer>
        <div className="footer_container">
          <p className="company_since">©codeit - 2024</p>
          <div className="faq">
            <Link to="/privacy">Privacy Policy</Link>
            <Link to="/faq">FAQ</Link>
          </div>

          <ol className="sns_wrapper">
            {snsImages.map((sns, index) => {
              const SnsIcon = sns.svg;
              return (
                <li key={index}>
                  <a href={sns.href} target="_blank">
                    <SnsIcon className="sns_icon" />
                  </a>
                </li>
              );
            })}
          </ol>
        </div>
      </WidthContainer>
    </FooterStyle>
  );
}

export default HomeFooter;
