import { useCallback, useEffect, useState } from 'react';
import styled from 'styled-components';

import { getProducts } from '@/apis/items';
import { ORDER_BY } from '@/components/Items/constants';
import ItemBox from '@/components/Items/ItemBox';
import { getItemLimitByscreenSize } from '@/components/Items/utils';
import useAsync from '@/hooks/useAsync';
import useDebouncedResizeEffect from '@/hooks/useDebouncedResizeEffect';
import { device } from '@/styles/media';

const _BEST_ITEMS_DEFAULT_VALUES = {
  page: 1,
  pageSize: 5,
  orderBy: ORDER_BY.FAVORITE,
  keyword: '',
};

export default function BestItemsSection() {
  const [items, setItems] = useState([]);
  const [pageSize, setPageSize] = useState(
    getItemLimitByscreenSize({
      mobile: 1,
      tablet: 2,
      desktop: 4,
    })
  );
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
    handleLoad({ ..._BEST_ITEMS_DEFAULT_VALUES, pageSize });
  }, [handleLoad, pageSize]);

  useDebouncedResizeEffect(() => {
    setPageSize(
      getItemLimitByscreenSize({
        mobile: 1,
        tablet: 2,
        desktop: 4,
      })
    );
  });

  return (
    <Section>
      <Title>베스트 상품</Title>
      <Items>
        {items.map((item) => (
          <ItemBox
            key={item.id}
            title={item.name}
            price={item.price}
            like={item.favoriteCount}
            imgUrl={item.images[0]}
            imgAlt={item.name}
          />
        ))}
      </Items>
    </Section>
  );
}
const Section = styled.section`
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
