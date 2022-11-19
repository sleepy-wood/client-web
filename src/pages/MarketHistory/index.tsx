import React, { useEffect, useState } from 'react';

import * as API from '../../apis';
import * as I from '../../interfaces';
import * as S from './styled';
import MarketHistoryContent from '../../components/organisms/MarketHistoryContent';

export default function MarketHistory() {
  const [history, setHistory] = useState<I.Order[][]>(null);

  useEffect(() => {
    async function fetchData() {
      const [data, error] = await API.order.findAllGroupByMonth();

      if (error) {
        console.log(error.data.error.reason);
      }

      const currMonth = new Date().getMonth() + 1;
      setHistory([
        data.filter(item => new Date(item.createdAt).getMonth() + 1 === currMonth),
        data.filter(item => new Date(item.createdAt).getMonth() + 1 === currMonth - 1),
        data.filter(item => new Date(item.createdAt).getMonth() + 1 === currMonth - 2),
        data.filter(item => new Date(item.createdAt).getMonth() + 1 === currMonth - 3),
        data.filter(item => new Date(item.createdAt).getMonth() + 1 === currMonth - 4),
        data.filter(item => new Date(item.createdAt).getMonth() + 1 === currMonth - 5),
      ]);
    }

    fetchData();
  }, []);

  return (
    <S.Container>
      <MarketHistoryContent history={history} />
    </S.Container>
  );
}
