import React, { useCallback, useEffect, useState } from 'react';
import { useLocation, useNavigate, useParams } from 'react-router-dom';
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
  const location = useLocation();
  const navigate = useNavigate();
  const { category } = useParams<string>();
  const [active, setActive] = useState<number>(0);

  const moveToPath = useCallback(
    (path: string, active: number, e: React.MouseEvent) => {
      e.preventDefault();
      e.stopPropagation();

      if (location.pathname !== path) {
        scrollTo(0, 0);
        setActive(active);
        navigate(path);
      }
    },
    [location.pathname, navigate],
  );

  useEffect(() => {
    switch (category) {
      case 'collection':
        setActive(1);
        break;
      case 'emoticon':
        setActive(2);
        break;
      case 'flower':
        setActive(3);
        break;
      case 'plants':
        setActive(4);
        break;
      case 'mushroom':
        setActive(5);
        break;
      case 'rock':
        setActive(6);
        break;
      case 'wooden':
        setActive(7);
        break;
      case 'light':
        setActive(8);
        break;
      default:
        setActive(0);
        break;
    }
  }, [category]);

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
            <div>목재 소품</div>
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
