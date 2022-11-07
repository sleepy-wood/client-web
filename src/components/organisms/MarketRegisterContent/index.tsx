import React from 'react';

import * as S from './styled';
import Richtext from '../../molecules/RichtextEditor';

export default function MarketRegisterContent() {
  return (
    <S.Container>
      <S.Title>에셋 등록</S.Title>
      <div>
        <Richtext />
      </div>
    </S.Container>
  );
}
