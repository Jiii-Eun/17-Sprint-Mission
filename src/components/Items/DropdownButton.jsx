import styled from "styled-components";
import ArrowDownIcon from "@/assets/icons/ic_arrow_down.svg";
import SortIcon from "@/assets/icons/ic_sort.svg";

import { useState } from "react";
import { ORDER_BY } from "./constants";
import useIsMobile from "@/hooks/useIsMobile";
import { device } from "@/styles/common/media";

const ORDER_BY_ENG_TO_KOR = {
  favorite: "인기순",
  recent: "최신순",
};

export default function DropdownButton({ orderBy, setOrderBy }) {
  const [isClicked, setIsClicked] = useState(false);
  const isMobile = useIsMobile();
  const handleClick = () => {
    setIsClicked((prev) => !prev);
  };
  const handleOptionClick = (e) => {
    setOrderBy(e.target.name);
  };

  return (
    <Container>
      <CurrentOption onClick={handleClick}>
        {isMobile ? (
          <img src={SortIcon} />
        ) : (
          <>
            <span>{ORDER_BY_ENG_TO_KOR[orderBy]}</span>
            <img src={ArrowDownIcon} />
          </>
        )}
      </CurrentOption>
      {isClicked && (
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
  font-size: var(--font-size-400);
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
  background-color: var(--white-color);
  border: 1px solid var(--gray-200-color);
  border-radius: var(--border-radius-sm);
  padding: var(--spacing-xs) var(--spacing-sm);
  width: 8rem;
  padding: 12px 20px;
`;
const CurrentOption = styled(Option)`
  width: auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
  @media ${device.tablet} {
    width: 8rem;
  }
`;
