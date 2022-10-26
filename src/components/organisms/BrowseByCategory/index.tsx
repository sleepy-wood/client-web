import React from 'react';
import { useMediaQuery } from 'react-responsive';

import * as S from './styled';
import { MEDIA } from '../../../constants';

const { minWidth } = MEDIA;

export default function BrowseByCategory() {
  const isDesktop = useMediaQuery({ minWidth });

  return isDesktop ? <Desktop /> : <Mobile />;
}

function Desktop() {
  return (
    <S.Container>
      <S.TitleContainer>
        <S.Title>Browse by category</S.Title>
      </S.TitleContainer>
      <S.CategoryContainer>
        <S.Category>
          <div>img</div>
          <div>Category1</div>
        </S.Category>
      </S.CategoryContainer>
    </S.Container>
  );
}

function Mobile() {
  return <div>Mobile</div>;
}
