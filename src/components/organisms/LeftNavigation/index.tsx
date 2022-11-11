import React, { useCallback, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { FaTh, FaTree, FaSmileWink } from 'react-icons/fa';
import {
  GiFlowers,
  GiPlantRoots,
  GiMushrooms,
  GiRock,
  GiWoodenSign,
  GiCandleLight,
} from 'react-icons/gi';

import * as C from '../../../constants';
import * as S from './styled';

export default function LeftNavigation() {
  const [active, setActive] = useState<number>(0);
  const location = useLocation();
  const navigate = useNavigate();

  const moveToPath = useCallback(
    (path: string, active: number, e: React.MouseEvent) => {
      e.preventDefault();
      e.stopPropagation();

      if (location.pathname !== path) {
        setActive(active);
        navigate(path);
      }
    },
    [location.pathname, navigate],
  );

  return (
    <S.Container>
      <div>
        <p>카테고리</p>
        <ul>
          <S.Li active={active === 0} onClick={moveToPath.bind(null, C.PATH.MARKET.ALL, 0)}>
            <FaTh />
            <div>전체</div>
          </S.Li>
          <S.Li active={active === 1} onClick={moveToPath.bind(null, C.PATH.MARKET.COLLECTION, 1)}>
            <FaTree />
            <div>컬렉션</div>
          </S.Li>
          <S.Li active={active === 2} onClick={moveToPath.bind(null, C.PATH.MARKET.EMOTICON, 2)}>
            <FaSmileWink />
            <div>이모티콘</div>
          </S.Li>
          <S.Li active={active === 3} onClick={moveToPath.bind(null, C.PATH.MARKET.FLOWER, 3)}>
            <GiFlowers />
            <div>꽃</div>
          </S.Li>
          <S.Li active={active === 4} onClick={moveToPath.bind(null, C.PATH.MARKET.PLANTS, 4)}>
            <GiPlantRoots />
            <div>식물</div>
          </S.Li>
          <S.Li active={active === 5} onClick={moveToPath.bind(null, C.PATH.MARKET.MUSHROOM, 5)}>
            <GiMushrooms />
            <div>버섯</div>
          </S.Li>
          <S.Li active={active === 6} onClick={moveToPath.bind(null, C.PATH.MARKET.ROCK, 6)}>
            <GiRock />
            <div>바위</div>
          </S.Li>
          <S.Li active={active === 7} onClick={moveToPath.bind(null, C.PATH.MARKET.WOODEN, 7)}>
            <GiWoodenSign />
            <div>나무 소품</div>
          </S.Li>
          <S.Li active={active === 8} onClick={moveToPath.bind(null, C.PATH.MARKET.LIGHT, 8)}>
            <GiCandleLight />
            <div>라이트</div>
          </S.Li>
        </ul>
      </div>
    </S.Container>
  );
}
