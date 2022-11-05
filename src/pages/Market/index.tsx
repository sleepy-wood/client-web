import React from 'react';

import * as S from './styled';
import Header from '../../components/organisms/Header';
import LeftNavigation from '../../components/organisms/LeftNavigation';

export default function Market() {
  return (
    <S.Container>
      <Header />
      <div className='flex'>
        <LeftNavigation />
        <div>Content</div>
      </div>
    </S.Container>
  );
}
