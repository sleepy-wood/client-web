import React from 'react';

import * as S from './styled';
import Header from '../../organisms/Header';

export default function OuterContainer({ children }) {
  return (
    <S.Container>
      <svg width='0' height='0'>
        <linearGradient id='blue-gradient' x1='100%' y1='100%' x2='0%' y2='0%'>
          <stop stopColor='#313860' offset='0%' />
          <stop stopColor='#151928' offset='100%' />
        </linearGradient>
      </svg>
      <Header />
      {children}
    </S.Container>
  );
}
