import React, { useCallback } from 'react';
import { FaRegArrowAltCircleRight } from 'react-icons/fa';
import { useMediaQuery } from 'react-responsive';
import { useLocation, useNavigate } from 'react-router-dom';

import * as C from '../../../constants';
import * as S from './styled';
import beauty from '../../../assets/images/beauty.png';
import profile1 from '../../../assets/images/profile1.png';

const { minWidth } = C.MEDIA;

export default function MarketContent() {
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
      <S.ContentContainer>
        <S.ContentContainerHeader>
          <div>컬렉션</div>
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
          <div onClick={moveToPath.bind(null, '')}>
            <div>더보기</div>
            <div>
              <FaRegArrowAltCircleRight />
            </div>
          </div>
        </S.More>
      </S.ContentContainer>
      <S.ContentContainer>
        <S.ContentContainerHeader>
          <div>랜드소품</div>
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
          <div onClick={moveToPath.bind(null, '')}>
            <div>더보기</div>
            <div>
              <FaRegArrowAltCircleRight />
            </div>
          </div>
        </S.More>
      </S.ContentContainer>
      <S.ContentContainer>
        <S.ContentContainerHeader>
          <div>이모티콘</div>
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
          <div onClick={moveToPath.bind(null, '')}>
            <div>더보기</div>
            <div>
              <FaRegArrowAltCircleRight />
            </div>
          </div>
        </S.More>
      </S.ContentContainer>
    </S.Container>
  );
}

function Mobile() {
  return <div>Mobile</div>;
}
