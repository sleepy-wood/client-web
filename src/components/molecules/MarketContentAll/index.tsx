import React, { useCallback, useEffect, useState } from 'react';
import { FaRegArrowAltCircleRight } from 'react-icons/fa';
import { useMediaQuery } from 'react-responsive';
import { useLocation, useNavigate } from 'react-router-dom';

import * as API from '../../../apis';
import * as C from '../../../constants';
import * as I from '../../../interfaces';
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
  const [usersWithCount, setUsersWithCount] = useState<[I.User[], string][]>(null);

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

  useEffect(() => {
    async function fetchData() {
      const [result, error] = await API.product.findFiveByCategory();

      if (error) {
        error && console.log(error.data.error.reason);
        return;
      }

      setUsersWithCount(result);
    }

    !usersWithCount && fetchData();
  }, [usersWithCount]);

  return (
    <S.Container>
      <S.Header>
        <h1>NFT 마켓플레이스에 오신 것을 환영합니다.</h1>
        <p>여기에서 크리에이터의 에셋을 검색하고 ETH로 구매하여 App에서 사용할 수 있습니다.</p>
      </S.Header>
      {usersWithCount &&
        [
          ['컬렉션', 'COLLECTION'],
          ['이모티콘', 'EMOTICON'],
          ['꽃', 'FLOWER'],
          ['식물', 'PLANTS'],
          ['버섯', 'MUSHROOM'],
          ['바위', 'ROCK'],
          ['나무 소품', 'WOODEN'],
          ['라이트', 'LIGHT'],
        ].map(([item, category], index) => (
          <S.ContentContainer key={index}>
            <S.ContentContainerHeader>
              <div>{item}</div>
              <div>({usersWithCount[index][1]})</div>
            </S.ContentContainerHeader>
            <S.CardContainer>
              {usersWithCount[index][0].map((user, _index) => (
                <S.Card key={_index} onClick={moveToPath.bind(null, C.PATH.MARKET_DETAIL)}>
                  <div>
                    <img src={user.bannerImg} alt={`${user.nickname}'s profile banner`} />
                  </div>
                  <div>
                    <img src={user.profileImg} alt={`${user.nickname}'s profile`} />
                  </div>
                  <div>
                    <div>{user.nickname}</div>
                    <div>{user.productCount} 에셋</div>
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
