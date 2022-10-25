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
      <div>
        <div>Sleepy Wood</div>
        <div>Build Healthy Sleep Habits</div>
        <img src={appStore} alt='apps-store' width={120} height={100} />
      </div>
      <div>
        <img src={appStore} alt='apps-store' width={120} height={100} />
      </div>
    </S.Container>
  );
}

export function Mobile() {
  return <div>Mobile</div>;
}
