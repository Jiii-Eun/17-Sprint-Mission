import styled from "styled-components";
import ArrowDownIcon from "@/assets/icons/ic_arrow_down.svg";
import { useState } from "react";
import { ORDER_BY, ORDER_BY_KOR_TO_ENG } from "./constants";
export default function DropdownButton({ orderBy, setOrderBy }) {
  const [isClicked, setIsClicked] = useState(false);
  const handleClick = () => {
    setIsClicked((prev) => !prev);
  };
  const handleOptionClick = (e) => {
    setOrderBy(e.target.name);
  };
  return (
    <Container>
      <CurrentOption onClick={handleClick}>
        <span>{ORDER_BY_KOR_TO_ENG[orderBy]}</span>
        <img src={ArrowDownIcon} />
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
`;
const Options = styled.div`
  position: absolute;
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
  width: 8rem;
  padding: 12px 20px;
`;
const CurrentOption = styled(Option)`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
