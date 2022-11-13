import React, { useEffect, useState } from 'react';

import * as API from '../../apis';
import * as I from '../../interfaces';
import * as S from './styled';
import DashboardContent from '../../components/organisms/DashboardContent';

export default function Dashboard() {
  const [weekHealth, setWeekHealth] = useState<I.Activity[]>(null);

  useEffect(() => {
    async function fetchData() {
      const [data, error] = await API.health.findWeekData(new Date('2022-10-29T12:00:00.100Z'));

      if (error) {
        console.log(error.data.error.reason);
      }

      setWeekHealth(data);

      return;
    }

    fetchData();
  }, []);

  return (
    <S.Container>
      <DashboardContent weekHealth={weekHealth} />
    </S.Container>
  );
}
