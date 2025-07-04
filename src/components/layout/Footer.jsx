import { Link } from "react-router-dom";
import FacebookIcon from "@/assets/icons/ic_facebook.svg";
import TwitterIcon from "@/assets/icons/ic_twitter.svg";
import InstagramIcon from "@/assets/icons/ic_instagram.svg";
import YoutubeIcon from "@/assets/icons/ic_youtube.svg";
import styled from "styled-components";
import { device } from "@/styles/media";

export default function Footer() {
  return (
    <StyledFooter>
      <Container>
        <Copyright>©codeit - 2024</Copyright>
        <Info>
          <Link to="privacy" aria-label="개인정보 관리 정책 화면으로 이동">
            Privacy Policy
          </Link>
          <Link to="faq" aria-label="FAQ 화면으로 이동">
            FAQ
          </Link>
        </Info>
        <Icons>
          <Link
            to="https://www.facebook.com"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="페이스북 페이지로 이동"
          >
            <FacebookIcon aria-label="트위터 아이콘" />
          </Link>
          <Link
            to="https://www.x.com"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="트위터 페이지로 이동"
          >
            <TwitterIcon aria-label="트위터 아이콘" />
          </Link>
          <Link
            to="https://www.youtube.com"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="유튜브 페이지로 이동"
          >
            <YoutubeIcon aria-label="유튜브 아이콘" />
          </Link>
          <Link
            to="https://www.instagram.com"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="인스타그램 페이지로 이동"
          >
            <InstagramIcon aria-label="인스타그램 아이콘" />
          </Link>
        </Icons>
      </Container>
    </StyledFooter>
  );
}

const StyledFooter = styled.footer`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  width: 100%;
  background-color: #111827;
`;
const Container = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
  width: 100%;
  padding: var(--spacing-xl);
  font-size: var(--font-size-400);
  font-weight: 400;
  @media ${device.tablet} {
    flex-wrap: nowrap;
  }
  @media ${device.desktop} {
    padding: 2rem 6.5rem 6.75rem;
  }
`;
const Copyright = styled.span`
  color: var(--gray-400-color);
  padding-top: 36px;
  order: 3;
  width: 100%;
  @media ${device.tablet} {
    padding-top: 0;
    order: 1;
    width: auto;
  }
`;
const Info = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: var(--spacing-xl);
  color: var(--gray-200-color);
`;
const Icons = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: var(--spacing-sm);
  & svg {
    width: var(--font-size-500);
    height: var(--font-size-500);
  }
`;
