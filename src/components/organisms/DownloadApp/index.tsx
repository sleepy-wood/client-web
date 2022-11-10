import React from 'react';
import { useMediaQuery } from 'react-responsive';

import * as S from './styled';
import appStore from '../../../assets/images/app-logo.png';
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
      <S.Video>
        <video
          controls={false}
          muted={true}
          autoPlay={true}
          loop={true}
          src='videos/rusty_rain_1.mp4'></video>
      </S.Video>
    </S.Container>
  );
}

export function Mobile() {
  return <div>Mobile</div>;
}
