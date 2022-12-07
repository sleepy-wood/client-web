import React, { useCallback } from 'react';
import { useMediaQuery } from 'react-responsive';
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
import categoryFlower from '../../../assets/images/cate_flower.webp';
import categoryPlants from '../../../assets/images/cate_plants.webp';
import categoryMushroom from '../../../assets/images/cate_mushroom.webp';
import categoryRock from '../../../assets/images/cate_rock.webp';
import categoryWooden from '../../../assets/images/cate_wooden.png';
import categoryLight from '../../../assets/images/cate_light.webp';

import { MEDIA } from '../../../constants';

const { minWidth } = MEDIA;

export default function BrowseByCategory() {
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
      <S.TitleContainer>
        <S.Title>Browse by category</S.Title>
      </S.TitleContainer>
      <S.CategoryContainer>
        <S.Category onClick={moveToPath.bind(null, C.PATH.MARKET.FLOWER)}>
          <div>
            <img src={categoryFlower} alt='category' />
          </div>
          <div>
            <div>
              <GiFlowers style={{ fill: 'url(#blue-gradient)' }} />
            </div>
            <div>꽃</div>
          </div>
        </S.Category>
        <S.Category onClick={moveToPath.bind(null, C.PATH.MARKET.PLANTS)}>
          <div>
            <img src={categoryPlants} alt='category' />
          </div>
          <div>
            <div>
              <GiPlantRoots style={{ fill: 'url(#blue-gradient)' }} />
            </div>
            <div>식물</div>
          </div>
        </S.Category>
        <S.Category onClick={moveToPath.bind(null, C.PATH.MARKET.MUSHROOM)}>
          <div>
            <img src={categoryMushroom} alt='category' />
          </div>
          <div>
            <div>
              <GiMushrooms style={{ fill: 'url(#blue-gradient)' }} />
            </div>
            <div>버섯</div>
          </div>
        </S.Category>
      </S.CategoryContainer>
      <S.CategoryContainer>
        <S.Category onClick={moveToPath.bind(null, C.PATH.MARKET.ROCK)}>
          <div>
            <img src={categoryRock} alt='category' />
          </div>
          <div>
            <div>
              <GiRock style={{ fill: 'url(#blue-gradient)' }} />
            </div>
            <div>바위</div>
          </div>
        </S.Category>
        <S.Category onClick={moveToPath.bind(null, C.PATH.MARKET.WOODEN)}>
          <div>
            <img src={categoryWooden} alt='category' />
          </div>
          <div>
            <div>
              <GiWoodenSign style={{ fill: 'url(#blue-gradient)' }} />
            </div>
            <div>목재 소품</div>
          </div>
        </S.Category>
        <S.Category onClick={moveToPath.bind(null, C.PATH.MARKET.LIGHT)}>
          <div>
            <img src={categoryLight} alt='category' />
          </div>
          <div>
            <div>
              <GiCandleLight style={{ fill: 'url(#blue-gradient)' }} />
            </div>
            <div>라이트</div>
          </div>
        </S.Category>
      </S.CategoryContainer>
    </S.Container>
  );
}

function Mobile() {
  return <div>Mobile</div>;
}
