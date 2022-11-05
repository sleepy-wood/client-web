import React from 'react';
import { useMediaQuery } from 'react-responsive';

import * as S from './styled';
import appStore from '../../../assets/images/app-logo.png';
import beauty from '../../../assets/images/beauty.png';
import beauty2 from '../../../assets/images/beauty2.png';
import { MEDIA } from '../../../constants';

const { minWidth } = MEDIA;

export default function DownloadApp() {
  const isDesktop = useMediaQuery({ minWidth });

  return isDesktop ? <Desktop /> : <Mobile />;
}

export function Desktop() {
  return (
    <S.Container>
      <S.Main>
        <div>Sleepywood</div>
        <div>Build Healthy Sleep Habits</div>
        <img src={appStore} alt='download on the apps store' />
      </S.Main>
      <S.Img>
        <img src={beauty} alt='beauty tree' />
        <img src={beauty2} alt='beauty tree' />
      </S.Img>
    </S.Container>
  );
}

export function Mobile() {
  return <div>Mobile</div>;
}
