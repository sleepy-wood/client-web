import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

import * as API from '../../apis';
import * as I from '../../interfaces';
import * as S from './styled';
import MarketDetailContent from '../../components/organisms/MarketDetailContent';

export default function MarketDetail() {
  const { id } = useParams<string>();
  const [user, setUser] = useState<I.User>(null);
  const [products, setProducts] = useState<I.Product[]>(null);
  const [productCount, setProductCount] = useState<number>(0);

  useEffect(() => {
    async function fetchData() {
      const [data, error] = await API.user.findUserById(id);

      if (error) {
        console.log(error.data.error.reason);
      }

      const [_user, [_products, _productCount]] = data;
      setUser(_user);
      setProducts(_products);
      setProductCount(_productCount);
    }

    !user && fetchData();
  }, [user, id]);

  return (
    <S.Container>
      <MarketDetailContent user={user} products={products} productCount={productCount} />
    </S.Container>
  );
}
