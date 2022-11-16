import React, { useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';

import * as API from '../../apis';
import * as I from '../../interfaces';
import * as S from './styled';
import SearchContent from '../../components/organisms/SearchContent';

export default function SearchResult() {
  const [searchParams] = useSearchParams();
  const [products, setProducts] = useState<[I.Product[], number][]>(null);

  useEffect(() => {
    async function fetchData() {
      const query = searchParams.get('query');
      const [data, error] = await API.product.findFiveByQuery(query);

      if (error) {
        console.log(error.data.error.reason);
      }

      setProducts(data);
    }

    fetchData();
  }, [searchParams]);

  return (
    <S.Container>
      <SearchContent products={products} />
    </S.Container>
  );
}
