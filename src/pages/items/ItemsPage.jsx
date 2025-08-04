import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

import { getProducts } from "@/apis/products";
import { handleFetch } from "@/utils/handleFetch";
import ItemList from "@/pages/items/ItemList";
import ItemsSearch from "@/pages/items/ItemsSearch";
import ItemsOrder from "@/pages/items/ItemsOrder";

function ItemsPage() {
  //api 데이터 가져오기
  const [bestProducts, setBestProducts] = useState([]);
  const [products, setProducts] = useState([]);

  //상태 변경
  const [searchInput, setSearchInput] = useState("");
  const [orderBy, setOrderBy] = useState("recent");
  const [page, setPage] = useState(1);
  const [totalCount, setTotalCount] = useState(0);
  const [error, setError] = useState(null);

  const fetchData = (params, setData, error) => {
    return handleFetch({
      fetchFn: () => getProducts(params),
      onSuccess: setData,
      //all, best 각각 에러 메시지 추가
      onError: (msg) => setError((prev) => ({ ...prev, [error]: msg })),
    });
  };

  //전체 상품
  const fetchProducts = () =>
    fetchData(
      { keyword: searchInput, orderBy, pageSize: 10, page },
      (result) => {
        setProducts(result.list || []);
        setTotalCount(result.totalCount || 0);
      },
      "all"
    );

  //베스트상품
  const fetchBestProducts = () =>
    fetchData(
      { orderBy: "favorite", pageSize: 5 },
      (result) => setBestProducts(result.list || []),
      "best"
    );

  //맨 처음 렌더링했을 때
  useEffect(() => {
    fetchProducts();
    fetchBestProducts();
  }, []);

  // 페이지이동, 검색, 정렬변경했을 때 렌더링
  useEffect(() => {
    fetchProducts();
  }, [page, searchInput, orderBy]);

  return (
    <>
      {error ? (
        <>
          <p>상품을 불러오는데 실패했습니다</p>
          <button>
            <Link to="/">돌아가기</Link>
          </button>
        </>
      ) : (
        <>
          <h3>베스트 상품</h3>
          <ul>
            {bestProducts.map((item) => (
              <li key={item.id}>
                <ItemList {...item} />
              </li>
            ))}
          </ul>

          <div>
            <h3>전체 상품</h3>
            <div>
              <ItemsSearch setSearchInput={setSearchInput} />
              <button>
                <Link to="/AddItem">상품등록하기</Link>
              </button>
              <ItemsOrder setOrderBy={setOrderBy} />
            </div>
            <ul>
              {products.map((item) => (
                <li key={item.id}>
                  <ItemList {...item} />
                </li>
              ))}
            </ul>
          </div>

          <ol>
            {Array.from({ length: Math.ceil(totalCount / 10) }, (_, i) => (
              <li key={i}>
                <button onClick={() => setPage(i + 1)}>{i + 1}</button>
              </li>
            ))}
          </ol>
        </>
      )}
    </>
  );
}

export default ItemsPage;
