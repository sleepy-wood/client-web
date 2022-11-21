import React from 'react';

import * as S from './styled';
import Header from '../../organisms/Header';

export default function OuterContainer({ children }) {
  return (
    <S.Container>
      <Header />
      {children}
    </S.Container>
  );
}
