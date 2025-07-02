import { Link, NavLink } from "react-router-dom";
import styled from "styled-components";
import navbarLogo from "@/assets/imgs/panda_icon_small.svg";
import defaultProfileImg from "@/assets/imgs/img_default_profile.png";
import { device } from "@/styles/common/media";

function getLinkStyle({ isActive }) {
  return {
    color: isActive ? "#3692FF" : "#4b5563",
  };
}
export default function Header() {
  return (
    <StyledHeader>
      <NavBar>
        <LogoWrapper>
          <Logo src={navbarLogo} alt="판다마켓 로고" />
          <Title>
            <Link to={"/"} aria-label="홈으로 이동">
              판다마켓
            </Link>
          </Title>
        </LogoWrapper>
        <NavList>
          <li>
            <NavLink
              to="/community"
              style={getLinkStyle}
              aria-label="자유게시판으로 이동"
            >
              자유게시판
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/items"
              style={getLinkStyle}
              aria-label="중고마켓 페이지로 이동"
            >
              중고마켓
            </NavLink>
          </li>
        </NavList>
        <ProfileImgWrapper>
          <Link to="/login" aria-label="로그인 화면으로 이동">
            <img src={defaultProfileImg} alt="회색 기본 프로필 이미지" />
          </Link>
        </ProfileImgWrapper>
      </NavBar>
    </StyledHeader>
  );
}
const StyledHeader = styled.header`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #ffffff;
  border-bottom: 1px solid #dfdfdf;
  padding: var(--spacing-sm) 0;
`;
const NavBar = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-grow: 1;
  margin: 0 var(--spacing-md);

  @media ${device.tablet} {
    margin: 0 var(--spacing-lg);
  }
  @media ${device.desktop} {
    margin: 0 200px;
  }
`;
const LogoWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 10px;
`;
const Logo = styled.img`
  width: 3.125rem;
  height: 3.125rem;
  display: none;
  @media ${device.desktop} {
    display: block;
  }
`;
const Title = styled.h1`
  font-size: var(--font-size-450);
  font-weight: 700;
  font-family: var(--font-secondary);
  color: var(--primary-color);
`;
const NavList = styled.ul`
  flex: 1 1;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  gap: var(--spacing-sm);
  font-size: var(--font-size-400);
  margin-left: var(--spacing-md);
  color: var(--gray-600-color);
  @media ${device.desktop} {
    font-size: var(--font-size-450);
    margin-left: var(--spacing-xxxl);
    gap: var(--spacing-xl);
  }
`;
const ProfileImgWrapper = styled.div`
  border-radius: var(--border-radius-circle);
  background-color: var(--gray-400-color);
  width: 40px;
  height: 40px;
`;
const LoginButton = styled.button`
  font-weight: 600;
  font-size: var(--font-size-400);
  line-height: 26px;
  text-align: center;
  padding: var(--spacing-sm) var(--spacing-lg);
  color: var(--gray-100-color);
  background-color: var(--primary-color);
  border-radius: var(--border-radius-xs);
  border: none;
  @media ${device.desktop} {
    width: 8rem;
    height: 3rem;
  }
`;
