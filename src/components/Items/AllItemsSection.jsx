import styled from "styled-components";
import Item from "./Item";
import Button from "../common/Button";
import { useState } from "react";
import { getProducts } from "@/apis/Items";
import useAsync from "@/hooks/useAsync";
import { useEffect } from "react";
import { useCallback } from "react";
import { DEFAULT_VALUES, ORDER_BY } from "./constants";
import DropdownButton from "./DropdownButton";
import Pagination from "./PaginationBar";
import Search from "./Search";

export default function AllItems() {
  const [items, setItems] = useState([]);
  const [totalCount, setTotalCount] = useState(1);
  const [page, setPage] = useState(1);
  const [orderBy, setOrderBy] = useState(ORDER_BY.RECENT);
  const [isLoading, loadingError, getProductsAsync] = useAsync(getProducts);
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
    handleLoad({ ...DEFAULT_VALUES, orderBy, page });
  }, [handleLoad, orderBy, page]);
  return (
    <Container>
      <Head>
        <Title>모든 상품</Title>
        <Control>
          <Search onSubmit={handleSearchSubmit} />
          <Button text="상품 등록하기" as="a" link="/additem" />
          <DropdownButton orderBy={orderBy} setOrderBy={setOrderBy} />
        </Control>
      </Head>
      <Items>
        {items.map((item) => (
          <ItemWrapper key={item.id}>
            <Item
              title={item.name}
              price={item.price}
              like={item.favoriteCount}
              imgUrl={item.images[0] ?? item.images[1]}
            />
          </ItemWrapper>
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
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
const Title = styled.h2`
  font-size: var(--font-size-500);
  font-weight: 700;
`;
const Control = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 12px;
`;

const Items = styled.ul`
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  gap: var(--spacing-xxl) var(--spacing-lg);
`;
const ItemWrapper = styled.div`
  width: 221px;
`;
