import React from 'react';
import { FaTh, FaTree, FaSmileWink } from 'react-icons/fa';
import { GiGardeningShears } from 'react-icons/gi';

import * as S from './styled';

export default function LeftNavigation() {
  return (
    <S.Container>
      <div>
        <p>카테고리</p>
        <ul>
          <li>
            <FaTh />
            <div>전체</div>
          </li>
          <li>
            <FaTree />
            <div>컬렉션</div>
          </li>
          <li>
            <GiGardeningShears />
            <div>랜드소품</div>
          </li>
          <li>
            <FaSmileWink />
            <div>이모티콘</div>
          </li>
        </ul>
      </div>
    </S.Container>
  );
}
