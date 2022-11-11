import React, { useCallback } from 'react';
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

import * as S from './styled';

export default function LeftNavigation() {
  const location = useLocation();
  const navigate = useNavigate();

  const moveToPath = useCallback(
    (path: string, e: React.MouseEvent) => {
      e.preventDefault();
      e.stopPropagation();

      if (location.pathname !== path) {
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
          <S.Li active={true}>
            <FaTh />
            <div>전체</div>
          </S.Li>
          <S.Li>
            <FaTree />
            <div>컬렉션</div>
          </S.Li>
          <S.Li>
            <FaSmileWink />
            <div>이모티콘</div>
          </S.Li>
          <S.Li>
            <GiFlowers />
            <div>꽃</div>
          </S.Li>
          <S.Li>
            <GiPlantRoots />
            <div>식물</div>
          </S.Li>
          <S.Li>
            <GiMushrooms />
            <div>버섯</div>
          </S.Li>
          <S.Li>
            <GiRock />
            <div>바위</div>
          </S.Li>
          <S.Li>
            <GiWoodenSign />
            <div>나무 소품</div>
          </S.Li>
          <S.Li>
            <GiCandleLight />
            <div>라이트</div>
          </S.Li>
        </ul>
      </div>
    </S.Container>
  );
}
