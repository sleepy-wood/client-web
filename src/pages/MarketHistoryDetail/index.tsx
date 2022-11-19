import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

import * as API from '../../apis';
import * as I from '../../interfaces';
import * as S from './styled';
import MarketHistoryDetailContent from '../../components/organisms/MarketHistoryDetailContent';

export default function MarketHistoryDetail() {
  const { id } = useParams<string>();
  const [history, setHistory] = useState<I.Order>(null);

  useEffect(() => {
    async function fetchData() {
      const [data, error] = await API.order.findOne(id);

      if (error) {
        console.log(error.data.error.reason);
      }

      setHistory(data);
    }

    fetchData();
  }, [id]);

  return (
    <S.Container>
      <MarketHistoryDetailContent history={history} />
    </S.Container>
  );
}
