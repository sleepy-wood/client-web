import React, { useCallback } from 'react';
import { FaRegArrowAltCircleRight } from 'react-icons/fa';
import { useMediaQuery } from 'react-responsive';
import { useLocation, useNavigate } from 'react-router-dom';

import * as C from '../../../constants';
import * as S from './styled';
import beauty from '../../../assets/images/beauty.png';
import profile1 from '../../../assets/images/profile1.png';
import { MEDIA } from '../../../constants';

const { minWidth } = MEDIA;

export default function MarketContentAll() {
  const isDesktop = useMediaQuery({ minWidth });

  return isDesktop ? <Desktop /> : <Mobile />;
}

function Desktop() {
  const location = useLocation();
  const navigate = useNavigate();

  const moveToPath = useCallback(
    (path: string, e: React.MouseEvent) => {
      e.preventDefault();
      e.stopPropagation();

      if (location.pathname !== path) {
        scrollTo(0, 0);
        navigate(path);
      }
    },
    [location.pathname, navigate],
  );

  return (
    <S.Container>
      <S.Header>
        <h1>NFT 마켓플레이스에 오신 것을 환영합니다.</h1>
        <p>여기에서 크리에이터의 에셋을 검색하고 ETH로 구매하여 App에서 사용할 수 있습니다.</p>
      </S.Header>
      {[
        ['컬렉션', 'COLLECTION'],
        ['이모티콘', 'EMOTICON'],
        ['꽃', 'FLOWER'],
        ['식물', 'PLANTS'],
        ['버섯', 'MUSHROOM'],
        ['바위', 'ROCK'],
        ['나무 소품', 'WOODEN'],
        ['라이트', 'LIGHT'],
      ].map(([item, category], index) => (
        <S.ContentContainer>
          <S.ContentContainerHeader key={index}>
            <div>{item}</div>
            <div>(100)</div>
          </S.ContentContainerHeader>
          <S.CardContainer>
            {[1, 2, 3, 4, 5].map((_, index) => (
              <S.Card key={index} onClick={moveToPath.bind(null, C.PATH.MARKET_DETAIL)}>
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
            <div onClick={moveToPath.bind(null, C.PATH.MARKET[category])}>
              <div>더보기</div>
              <div>
                <FaRegArrowAltCircleRight />
              </div>
            </div>
          </S.More>
        </S.ContentContainer>
      ))}
    </S.Container>
  );
}

function Mobile() {
  return <div>Mobile</div>;
}
