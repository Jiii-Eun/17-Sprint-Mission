import { useState, useEffect, useCallback } from "react";
import styled from "styled-components";
import ItemBox from "./ItemBox";
import Button from "../common/Button";
import { getProducts } from "@/apis/Items";
import useAsync from "@/hooks/useAsync";
import { DEFAULT_VALUES, ORDER_BY } from "./constants";
import DropdownButton from "./DropdownButton";
import Pagination from "./PaginationBar";
import Search from "./Search";
import { device, screenSizeNumber } from "@/styles/common/media";
import useResizeEffect from "@/hooks/useResizeEffect";
import useIsMobile from "@/hooks/useIsMobile";

const getItemDisplayLimit = () => {
  const width = window.innerWidth;
  if (width > screenSizeNumber.desktop) return 10;
  if (width > screenSizeNumber.tablet) return 6;
  return 4;
};
export default function AllItemsSection() {
  const [items, setItems] = useState([]);
  const [totalCount, setTotalCount] = useState(1);
  const [page, setPage] = useState(1);
  const [orderBy, setOrderBy] = useState(ORDER_BY.RECENT);
  const [pageSize, setPageSize] = useState(getItemDisplayLimit());
  const [isLoading, loadingError, getProductsAsync] = useAsync(getProducts);
  const isMobile = useIsMobile();

  const handleLoad = useCallback(
    async (options) => {
      const result = await getProductsAsync(options);
      if (!result) return; //error
      setItems(result?.list);
      setTotalCount(result?.totalCount);
    },
    [getProductsAsync]
  );
  const handleSearchSubmit = (value) => {
    handleLoad({ ...DEFAULT_VALUES, orderBy, page, keyword: value });
  };
  useEffect(() => {
    handleLoad({ ...DEFAULT_VALUES, orderBy, page, pageSize });
  }, [handleLoad, orderBy, page, pageSize]);

  useResizeEffect(() => {
    setPageSize(getItemDisplayLimit());
  });

  return (
    <Container>
      <Head>
        <Control>
          <Title>전체 상품</Title>
          {isMobile ? (
            <Button text="상품 등록하기" as="a" link="/additem" />
          ) : (
            <Search onSubmit={handleSearchSubmit} />
          )}
        </Control>
        <Control>
          {isMobile ? (
            <Search onSubmit={handleSearchSubmit} />
          ) : (
            <Button text="상품 등록하기" as="a" link="/additem" />
          )}
          <DropdownButton orderBy={orderBy} setOrderBy={setOrderBy} />
        </Control>
      </Head>
      <Items>
        {items.map((item) => (
          <ItemBox
            key={item.id}
            title={item.name}
            price={item.price}
            like={item.favoriteCount}
            imgUrl={item.images[0] ?? item.images[1]}
            imgAlt={item.name}
          />
        ))}
      </Items>
      <Pagination totalCount={totalCount} page={page} setPage={setPage} />
    </Container>
  );
}
const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  gap: var(--spacing-lg);
`;
const Head = styled.div`
  display: grid;
  grid-template-rows: 1fr 1fr;
  gap: var(--spacing-sm);
  @media ${device.tablet} {
    display: flex;
    & > div:first-child {
      flex-grow: 1;
    }
    & > div:last-child {
      justify-content: flex-end;
    }
  }
  @media ${device.desktop} {
  }
`;
const Title = styled.h2`
  font-size: var(--font-size-500);
  font-weight: 700;
`;
const Control = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: var(--spacing-sm);
  & > form {
    flex: 1 1;
  }
`;

const Items = styled.ul`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: var(--spacing-xxl) var(--spacing-lg);
  @media ${device.tablet} {
    grid-template-columns: repeat(3, 1fr);
  }
  @media ${device.desktop} {
    grid-template-columns: repeat(5, 1fr);
  }
`;
