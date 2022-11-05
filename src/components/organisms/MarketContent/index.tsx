import React from 'react';

import * as S from './styled';

export default function MarketContent() {
  return (
    <S.Container>
      <S.Header>
        <h1>NFT 마켓플레이스에 오신 것을 환영합니다.</h1>
        <p>여기에서 크리에이터의 에셋을 검색하고 Log로 구매하여 App에서 사용할 수 있습니다.</p>
      </S.Header>
      <S.ContentContainer>
        <S.ContentContainerHeader>
          <div>컬렉션</div>
          <div>(100)</div>
        </S.ContentContainerHeader>
        <S.CardContainer>
          <S.Card>
            <div>이미지</div>
            <div>이름</div>
            <div>소유자</div>
          </S.Card>
        </S.CardContainer>
      </S.ContentContainer>
    </S.Container>
  );
}
