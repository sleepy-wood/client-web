import React from 'react';

import * as S from './styled';
import Header from '../../components/organisms/Header';
import DownloadApp from '../../components/organisms/DownloadApp';
import ShowMeYourNFT from '../../components/organisms/ShowMeYourNFT';
import Trending from '../../components/organisms/Trending';
import Footer from '../../components/organisms/Footer';

export default function Home() {
  return (
    <S.Container>
      <Header />
      <DownloadApp />
      <ShowMeYourNFT />
      <Trending />
      <Footer />
    </S.Container>
  );
}
