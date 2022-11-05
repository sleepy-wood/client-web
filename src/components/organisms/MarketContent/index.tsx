import React from 'react';
import { FaRegArrowAltCircleRight } from 'react-icons/fa';

import * as S from './styled';
import beauty from '../../../assets/images/beauty.png';
import profile1 from '../../../assets/images/profile1.png';

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
          {[1, 2, 3, 4, 5].map((_, index) => (
            <S.Card key={index}>
              <div>
                <img src={beauty} alt='beauty' />
              </div>
              <div>
                <img src={profile1} alt='profile' />
              </div>
              <div>
                <div>User Nickname</div>
                <div>8 에셋</div>
              </div>
            </S.Card>
          ))}
        </S.CardContainer>
        <S.More>
          <div>더보기</div>
          <div>
            <FaRegArrowAltCircleRight />
          </div>
        </S.More>
      </S.ContentContainer>
      <S.ContentContainer>
        <S.ContentContainerHeader>
          <div>컬렉션</div>
          <div>(100)</div>
        </S.ContentContainerHeader>
        <S.CardContainer>
          {[1, 2, 3, 4, 5].map((_, index) => (
            <S.Card key={index}>
              <div>
                <img src={beauty} alt='beauty' />
              </div>
              <div>
                <img src={profile1} alt='profile' />
              </div>
              <div>
                <div>User Nickname</div>
                <div>8 에셋</div>
              </div>
            </S.Card>
          ))}
        </S.CardContainer>
        <S.More>
          <div>더보기</div>
          <div>
            <FaRegArrowAltCircleRight />
          </div>
        </S.More>
      </S.ContentContainer>
      <S.ContentContainer>
        <S.ContentContainerHeader>
          <div>컬렉션</div>
          <div>(100)</div>
        </S.ContentContainerHeader>
        <S.CardContainer>
          {[1, 2, 3, 4, 5].map((_, index) => (
            <S.Card key={index}>
              <div>
                <img src={beauty} alt='beauty' />
              </div>
              <div>
                <img src={profile1} alt='profile' />
              </div>
              <div>
                <div>User Nickname</div>
                <div>8 에셋</div>
              </div>
            </S.Card>
          ))}
        </S.CardContainer>
        <S.More>
          <div>더보기</div>
          <div>
            <FaRegArrowAltCircleRight />
          </div>
        </S.More>
      </S.ContentContainer>
    </S.Container>
  );
}
