import React, { useCallback, useState } from 'react';

import * as S from './styled';
import Header from '../../components/organisms/Header';
import DownloadApp from '../../components/organisms/DownloadApp';
import ShowMeYourNFT from '../../components/organisms/ShowMeYourNFT';
import Trending from '../../components/organisms/Trending';
import BrowseByCategory from '../../components/organisms/BrowseByCategory';

export default function Home() {
  const [account, setAccount] = useState<string>('');

  const connectWallet = useCallback(
    async (e: React.MouseEvent) => {
      e.preventDefault();
      e.stopPropagation();

      const accounts = await window.ethereum.request({
        method: 'eth_requestAccounts',
      });
      setAccount(accounts[0]);
      console.log(account);
    },
    [account],
  );

  return (
    <S.Container>
      <Header connectWallet={connectWallet} />
      <DownloadApp />
      <ShowMeYourNFT />
      <Trending />
      <BrowseByCategory />
    </S.Container>
  );
}
