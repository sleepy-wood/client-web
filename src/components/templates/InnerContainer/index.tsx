import React from 'react';
import { useMediaQuery } from 'react-responsive';

import * as S from './styled';
import { MEDIA } from '../../../constants';

const { minWidth } = MEDIA;

export default function InnerContainer({ children }) {
  const isDesktop = useMediaQuery({ minWidth });

  return isDesktop ? <Desktop>{children}</Desktop> : <Mobile>{children}</Mobile>;
}

function Desktop({ children }) {
  return <S.DesktopContainer>{children}</S.DesktopContainer>;
}

function Mobile({ children }) {
  return <S.MobileContainer>{children}</S.MobileContainer>;
}
