import { useCallback, useEffect, useState } from 'react';
import styled from 'styled-components';

import { getProducts } from '@/apis/Items';
import Button from '@/components/ui/Button';
import useAsync from '@/hooks/useAsync';
import useDebouncedResizeEffect from '@/hooks/useDebouncedResizeEffect';
import useIsMobile from '@/hooks/useIsMobile';
import { ORDER_BY } from '@/pages/Items/constants';
import DropdownButton from '@/pages/Items/DropdownButton';
import ItemBox from '@/pages/Items/ItemBox';
import Pagination from '@/pages/Items/Pagination';
import Search from '@/pages/Items/Search';
import { getItemLimitByscreenSize } from '@/pages/Items/utils';
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
  gap: ${({ theme }) => theme.spacing.lg};
`;
const Head = styled.div`
  display: grid;
  grid-template-rows: 1fr 1fr;
  gap: ${({ theme }) => theme.spacing.sm};
  @media ${device.TABLET} {
    display: flex;
    & > div:first-child {
      flex-grow: 1;
    }
    & > div:last-child {
      justify-content: flex-end;
    }
  }
  @media ${device.DESKTOP} {
  }
`;
const Title = styled.h2`
  font-size: ${({ theme }) => theme.fontSize.md};
  font-weight: 700;
`;
const Control = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: ${({ theme }) => theme.spacing.sm};
  & > form {
    flex: 1 1;
  }
`;

const Items = styled.ul`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: ${({ theme }) => theme.spacing['2xl']} ${({ theme }) => theme.spacing.lg};
  @media ${device.TABLET} {
    grid-template-columns: repeat(3, 1fr);
  }
  @media ${device.DESKTOP} {
    grid-template-columns: repeat(5, 1fr);
  }
`;
