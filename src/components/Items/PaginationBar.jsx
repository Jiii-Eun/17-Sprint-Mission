import styled from "styled-components";
import LeftArrowIcon from "@/assets/icons/ic_arrow_left.svg";
import RightArrowIcon from "@/assets/icons/ic_arrow_right.svg";

export default function PaginationBar({ totalCount = 1, page, setPage }) {
  const pagesCount = Math.ceil(totalCount / 10);
  const pageGroup = Math.ceil(page / 5);
  const firstPage = (pageGroup - 1) * 5 + 1;
  const lastPage = pageGroup * 5;
  const countArray = Array.from({ length: pagesCount }, (v, i) => i + 1).slice(
    firstPage - 1,
    lastPage
  );
  const handleClick = (e) => {
    setPage(Number(e.target.value));
  };
  const handleLeftArrowClick = () => {
    setPage((prev) => {
      const next = prev - 1;
      return next >= 1 ? next : 1;
    });
  };
  const handleRightArrowClick = () => {
    setPage((prev) => {
      const next = prev + 1;
      return pagesCount >= next ? next : pagesCount;
    });
  };
  return (
    <Container>
      <Counter onClick={handleLeftArrowClick} disabled={page === 1}>
        <Icon src={LeftArrowIcon} alt="이전 페이지 보기 버튼" />
      </Counter>
      {countArray.map((count) => {
        return (
          <Counter
            key={count}
            onClick={handleClick}
            value={count}
            aria-current={count === page ? "page" : undefined}
            $isactive={(count === page).toString()}
          >
            {count}
          </Counter>
        );
      })}
      <Counter onClick={handleRightArrowClick} disabled={page === pagesCount}>
        <Icon src={RightArrowIcon} alt="다음 페이지 보기 버튼" />
      </Counter>
    </Container>
  );
}
const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: var(--spacing-xs);
  margin: var(--spacing-lg) 0;
`;
const Counter = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: ${({ $isactive }) =>
    $isactive === "true" ? "var(--primary-color)" : "var(--white-color)"};
  color: ${({ $isactive }) =>
    $isactive === "true" ? "var(--gray-50-color)" : "var(--gray-500-color)"};
  border-radius: var(--border-radius-lg);
  border: 1px solid var(--gray-200-color);
  width: 2.5rem;
  height: 2.5rem;
  padding: 12.5px;
  font-weight: 600;
  font-size: var(--font-size-400);
`;

const Icon = styled.img`
  width: 16px;
  height: 16px;
`;
