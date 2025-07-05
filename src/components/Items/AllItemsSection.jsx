import { useCallback, useEffect, useState } from 'react';
import styled from 'styled-components';

import { getProducts } from '@/apis/items';
import Button from '@/components/common/Button';
import { ORDER_BY } from '@/components/Items/constants';
import DropdownButton from '@/components/Items/DropdownButton';
import ItemBox from '@/components/Items/ItemBox';
import Pagination from '@/components/Items/PaginationBar';
import Search from '@/components/Items/Search';
import { getItemLimitByscreenSize } from '@/components/Items/utils';
import useAsync from '@/hooks/useAsync';
import useDebouncedResizeEffect from '@/hooks/useDebouncedResizeEffect';
import useIsMobile from '@/hooks/useIsMobile';
import { device } from '@/styles/media';

export default function AllItemsSection() {
  const [items, setItems] = useState([]);
  const [totalCount, setTotalCount] = useState(1);
  const [orderBy, setOrderBy] = useState(ORDER_BY.RECENT);
  const [searchInput, setSearchInput] = useState('');
  const [page, setPage] = useState(1);
  const [pageSize, setPageSize] = useState(
    getItemLimitByscreenSize({
      mobile: 4,
      tablet: 6,
      desktop: 10,
    })
  );
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

  useEffect(() => {
    handleLoad({ orderBy, page, pageSize, keyword: searchInput });
  }, [handleLoad, orderBy, page, pageSize, searchInput]);

  useDebouncedResizeEffect(() => {
    setPageSize(
      getItemLimitByscreenSize({
        mobile: 4,
        tablet: 6,
        desktop: 10,
      })
    );
  });

  return (
    <Section>
      <Head>
        <Control>
          <Title>전체 상품</Title>
          {isMobile ? (
            <Button text='상품 등록하기' as='a' link='/additem' />
          ) : (
            <Search onSubmit={setSearchInput} />
          )}
        </Control>
        <Control>
          {isMobile ? (
            <Search onSubmit={setSearchInput} />
          ) : (
            <Button text='상품 등록하기' as='a' link='/additem' />
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
            imgUrl={item.images[0] || undefined}
            imgAlt={item.name}
          />
        ))}
      </Items>
      <Pagination totalCount={totalCount} page={page} setPage={setPage} />
    </Section>
  );
}
const Section = styled.section`
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
