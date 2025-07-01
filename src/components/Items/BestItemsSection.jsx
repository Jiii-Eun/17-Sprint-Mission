import styled from "styled-components";
import Item from "./Item";
import { useState } from "react";
import { useEffect } from "react";
import { getProducts } from "@/apis/Items";
import useAsync from "@/hooks/useAsync";
import { useCallback } from "react";
import { BEST_ITEMS_DEFAULT_VALUES } from "./constants";

export default function BestItems() {
  const [items, setItems] = useState([]);
  const [isLoading, loadingError, getProductsAsync] = useAsync(getProducts);
  const handleLoad = useCallback(
    async (options) => {
      const result = await getProductsAsync(options);
      if (!result) return; //error
      setItems(result?.list);
    },
    [getProductsAsync]
  );
  useEffect(() => {
    handleLoad(BEST_ITEMS_DEFAULT_VALUES);
  }, [handleLoad]);
  return (
    <Container>
      <Title>베스트 상품</Title>
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
    </Container>
  );
}
const Container = styled.div``;
const Title = styled.h2`
  margin-bottom: var(--spacing-lg);
  font-size: var(--font-size-500);
  font-weight: 700;
`;

const Items = styled.ul`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  gap: 15px;
`;
const ItemWrapper = styled.div`
  width: 282px;
`;
