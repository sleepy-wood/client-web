import React, { useEffect, useState } from 'react';

import * as API from '../../apis';
import * as I from '../../interfaces';
import * as S from './styled';
import DownloadApp from '../../components/organisms/DownloadApp';
import ShowMeYourNFT from '../../components/organisms/ShowMeYourNFT';
import Trending from '../../components/organisms/Trending';
import BrowseByCategory from '../../components/organisms/BrowseByCategory';

export default function Home() {
  const [trending, setTrending] = useState<I.User[]>(null);
  const [top, setTop] = useState<I.User[]>(null);

  useEffect(() => {
    async function fetchData() {
      const [result1, result2] = await Promise.all([
        API.user.findTrendingTen(),
        API.user.getTopTen(),
      ]);
      const [trending, trendingError] = result1;
      const [top, topError] = result2;

      if (trendingError || topError) {
        trendingError && console.log(trendingError.data.error.reason);
        topError && console.log(topError.data.error.reason);
      }

      setTrending(trending);
      setTop(top);

      return;
    }

    (!trending || !top) && fetchData();
  }, [top, trending]);

  return (
    <S.Container>
      <DownloadApp />
      <ShowMeYourNFT />
      <Trending trending={trending} top={top} />
      <BrowseByCategory />
    </S.Container>
  );
}
