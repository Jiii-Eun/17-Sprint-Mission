import { Link, NavLink } from 'react-router-dom';
import styled from 'styled-components';

import PandaLogo from '@/assets/icons/panda_icon_small.svg';
import defaultProfileImg from '@/assets/imgs/default_profile.png';
import { device } from '@/styles/media';

function getLinkStyle({ isActive }) {
  return {
    color: isActive ? '#3692FF' : '#4b5563',
  };
}
export default function Header() {
  return (
    <StyledHeader>
      <NavBar>
        <LogoWrapper>
          <Logo aria-label='판다마켓 로고' />
          <Title>
            <Link to={'/'} aria-label='홈으로 이동'>
              판다마켓
            </Link>
          </Title>
        </LogoWrapper>
        <NavList>
          <li>
            <NavLink
              to='/community'
              style={getLinkStyle}
              aria-label='자유게시판으로 이동'
            >
              자유게시판
            </NavLink>
          </li>
          <li>
            <NavLink
              to='/items'
              style={getLinkStyle}
              aria-label='중고마켓 페이지로 이동'
            >
              중고마켓
            </NavLink>
          </li>
        </NavList>
        <ProfileImgWrapper>
          <Link to='/login' aria-label='로그인 화면으로 이동'>
            <img src={defaultProfileImg} alt='회색 기본 프로필 이미지' />
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
  padding: ${({ theme }) => theme.spacing.sm} 0;
`;
const NavBar = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-grow: 1;
  margin: 0 ${({ theme }) => theme.spacing.md};

  @media ${device.TABLET} {
    margin: 0 ${({ theme }) => theme.spacing.lg};
  }
  @media ${device.DESKTOP} {
    margin: 0 200px;
  }
`;
const LogoWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 10px;
`;
const Logo = styled(PandaLogo)`
  width: 3.125rem;
  height: 3.125rem;
  display: none;
  @media ${device.DESKTOP} {
    display: block;
  }
`;
const Title = styled.h1`
  font-size: ${({ theme }) => theme.fontSize.lg};
  font-weight: 700;
  font-family: ${({ theme }) => theme.fontFamily.logo};
  color: ${({ theme }) => theme.colors.primary};
`;
const NavList = styled.ul`
  flex: 1 1;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  gap: ${({ theme }) => theme.spacing.sm};
  font-size: ${({ theme }) => theme.fontSize.sm};
  margin-left: ${({ theme }) => theme.spacing.md};
  color: ${({ theme }) => theme.colors.gray600};
  @media ${device.DESKTOP} {
    font-size: ${({ theme }) => theme.fontSize.lg};
    margin-left: ${({ theme }) => theme.spacing['3xl']};
    gap: ${({ theme }) => theme.spacing.xl};
  }
`;
const ProfileImgWrapper = styled.div`
  border-radius: ${({ theme }) => theme.borderRadius.circle};
  background-color: ${({ theme }) => theme.colors.gray400};
  width: 40px;
  height: 40px;
`;
const LoginButton = styled.button`
  font-weight: 600;
  font-size: ${({ theme }) => theme.fontSize.sm};
  line-height: 26px;
  text-align: center;
  padding: ${({ theme }) => theme.spacing.sm} ${({ theme }) => theme.spacing.lg};
  color: ${({ theme }) => theme.colors.gray100};
  background-color: ${({ theme }) => theme.colors.primary};
  border-radius: ${({ theme }) => theme.borderRadius.xs};
  border: none;
  @media ${device.DESKTOP} {
    width: 8rem;
    height: 3rem;
  }
`;
