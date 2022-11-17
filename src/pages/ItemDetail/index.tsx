import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

import * as API from '../../apis';
import * as I from '../../interfaces';
import * as S from './styled';
import ItemDetailContent from '../../components/organisms/ItemDetailContent';

export default function ItemDetail() {
  const { id } = useParams<string>();
  const [product, setProduct] = useState<I.Product>(null);
  const [extraProducts, setExtraProducts] = useState<I.Product[]>(null);
  const [recommendProducts, setRecommendProducts] = useState<I.Product[]>(null);

  useEffect(() => {
    async function fetchData() {
      const [result1, result2, result3, result4] = await Promise.all([
        API.product.findOne(id),
        API.product.findExtraProducts(id),
        API.product.findRecommendProducts(id),
        API.product.updateHitPlusOne(id),
      ]);

      const [_product, _productError] = result1;
      const [_extraProducts, _extraProductsError] = result2;
      const [_recommendProducts, _recommendProductsError] = result3;
      const updateHitPlusOneError = result4;

      if (
        _productError ||
        _extraProductsError ||
        _recommendProductsError ||
        updateHitPlusOneError
      ) {
        _productError && console.log(_productError.data.error.reason);
        _extraProductsError && console.log(_extraProductsError.data.error.reason);
        _recommendProductsError && console.log(_recommendProductsError.data.error.reason);
        updateHitPlusOneError && console.log(updateHitPlusOneError.data.error.reason);
      }

      setProduct(_product);
      setExtraProducts(_extraProducts);
      setRecommendProducts(_recommendProducts);
    }

    fetchData();
  }, [id]);

  return (
    <S.Container>
      <ItemDetailContent
        product={product}
        extraProducts={extraProducts}
        recommendProducts={recommendProducts}
      />
    </S.Container>
  );
}
