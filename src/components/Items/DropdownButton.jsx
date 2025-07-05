import { useState } from 'react';
import styled from 'styled-components';

import ArrowDownIcon from '@/assets/icons/ic_arrow_down.svg';
import SortIcon from '@/assets/icons/ic_sort.svg';
import { ORDER_BY } from '@/components/Items/constants';
import useIsMobile from '@/hooks/useIsMobile';
import { device } from '@/styles/media';

const _ORDER_BY_ENG_TO_KOR = {
  favorite: '인기순',
  recent: '최신순',
};

export default function DropdownButton({ orderBy, setOrderBy }) {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const isMobile = useIsMobile();
  const handleClick = () => {
    setIsDropdownOpen((prev) => !prev);
  };
  const handleOptionClick = (e) => {
    setOrderBy(e.target.name);
  };

  return (
    <Container>
      <CurrentOption onClick={handleClick}>
        {isMobile ? (
          <SortIcon />
        ) : (
          <>
            <span>{_ORDER_BY_ENG_TO_KOR[orderBy]}</span>
            <ArrowDownIcon />
          </>
        )}
      </CurrentOption>
      {isDropdownOpen && (
        <Options>
          <Option onClick={handleOptionClick} name={ORDER_BY.RECENT}>
            최신순
          </Option>
          <Option onClick={handleOptionClick} name={ORDER_BY.FAVORITE}>
            인기순
          </Option>
        </Options>
      )}
    </Container>
  );
}
const Container = styled.div`
  font-weight: 400;
  font-size: ${({ theme }) => theme.fontSize.sm};
  position: relative;
`;
const Options = styled.div`
  position: absolute;
  top: 50px;
  right: 0px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  & > button:first-child {
    border-bottom-left-radius: 0;
    border-bottom-right-radius: 0;
  }
  & > button:last-child {
    border-top-left-radius: 0;
    border-top-right-radius: 0;
  }
`;
const Option = styled.button`
  background-color: ${({ theme }) => theme.colors.white};
  border: 1px solid ${({ theme }) => theme.colors.gray200};
  border-radius: ${({ theme }) => theme.borderRadius.sm};
  padding: ${({ theme }) => theme.spacing.xs} ${({ theme }) => theme.spacing.sm};
  width: 8rem;
  padding: 12px 20px;
`;
const CurrentOption = styled(Option)`
  width: auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
  @media ${device.TABLET} {
    width: 8rem;
  }
`;
