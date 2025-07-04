import styled from "styled-components";
import ItemBox from "./ItemBox";
import { useState } from "react";
import { useEffect } from "react";
import { getProducts } from "@/apis/Items";
import useAsync from "@/hooks/useAsync";
import { useCallback } from "react";
import { BEST_ITEMS_DEFAULT_VALUES } from "./constants";
import useResizeEffect from "@/hooks/useResizeEffect";
import { device, screenSizeNumber } from "@/styles/media";

const getItemDisplayLimit = () => {
  const width = window.innerWidth;
  if (width > screenSizeNumber.desktop) return 4;
  if (width > screenSizeNumber.tablet) return 2;
  return 1;
};
export default function BestItemsSection() {
  const [items, setItems] = useState([]);
  const [pageSize, setPageSize] = useState(getItemDisplayLimit());
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
    handleLoad({ ...BEST_ITEMS_DEFAULT_VALUES, pageSize });
  }, [handleLoad, pageSize]);

  useResizeEffect(() => {
    setPageSize(getItemDisplayLimit());
  });

  return (
    <Container>
      <Title>베스트 상품</Title>
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
    </Container>
  );
}
const Container = styled.div`
  width: 100%;
`;
const Title = styled.h2`
  margin-bottom: var(--spacing-lg);
  font-size: var(--font-size-500);
  font-weight: 700;
`;

const Items = styled.ul`
  display: grid;
  grid-template-columns: 1fr;
  gap: 15px;
  @media ${device.tablet} {
    grid-template-columns: repeat(2, 1fr);
  }
  @media ${device.desktop} {
    grid-template-columns: repeat(4, 1fr);
  }
`;
