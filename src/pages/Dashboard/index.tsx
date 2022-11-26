import React, { useEffect, useState } from 'react';

import * as API from '../../apis';
import * as I from '../../interfaces';
import * as S from './styled';
import DashboardContent from '../../components/organisms/DashboardContent';

export default function Dashboard() {
  const [weekHealth, setWeekHealth] = useState<I.Activity[]>(null);
  const [heart, setHeart] = useState<I.Heart[]>(null);
  const [oxygen, setOxygen] = useState<I.Oxygen[]>(null);
  const [respiratory, setRespiratory] = useState<I.Respiratory[]>(null);
  const [sleeps, setSleeps] = useState<I.Sleep[]>(null);
  const [recentSleeps, setRecentSleeps] = useState<I.Sleep[]>(null);

  useEffect(() => {
    async function fetchData() {
      const [result1, result2, result3, result4, result5, result6] = await Promise.all([
        API.health.findWeekData(new Date('2022-10-29T12:00:00.100Z')),
        API.health.findHeart(),
        API.health.findOxygen(),
        API.health.findRespiratory(),
        API.health.findAllSleep(),
        API.health.findAllSleepRecent(),
      ]);

      const [weekHealth, weekHealthError] = result1;
      const [heart, heartError] = result2;
      const [oxygen, oxygenError] = result3;
      const [respiratory, respiratoryError] = result4;
      const [sleeps, sleepsError] = result5;
      const [recentSleeps, recentSleepsError] = result6;

      if (weekHealthError || heartError || oxygenError || respiratoryError || sleepsError) {
        weekHealthError && console.log(weekHealthError.data.error.reason);
        heartError && console.log(heartError.data.error.reason);
        oxygenError && console.log(oxygenError.data.error.reason);
        respiratoryError && console.log(respiratoryError.data.error.reason);
        sleepsError && console.log(sleepsError.data.error.reason);
        recentSleepsError && console.log(recentSleepsError.data.error.reason);
      }

      setWeekHealth(weekHealth);
      setHeart(heart);
      setOxygen(oxygen);
      setRespiratory(respiratory);
      setSleeps(sleeps);
      setRecentSleeps(recentSleeps);

      return;
    }

    fetchData();
  }, []);

  return (
    <S.Container>
      <DashboardContent
        weekHealth={weekHealth}
        heart={heart}
        oxygen={oxygen}
        respiratory={respiratory}
        sleeps={sleeps}
        recentSleeps={recentSleeps}
      />
    </S.Container>
  );
}
