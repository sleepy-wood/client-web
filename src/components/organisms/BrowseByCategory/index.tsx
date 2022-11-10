import React from 'react';
import { useMediaQuery } from 'react-responsive';

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
  return (
    <S.Container>
      <S.TitleContainer>
        <S.Title>Browse by category</S.Title>
      </S.TitleContainer>
      <S.CategoryContainer>
        <S.Category>
          <div>
            <img src={categoryFlower} alt='category' />
          </div>
          <div>꽃</div>
        </S.Category>
        <S.Category>
          <div>
            <img src={categoryPlants} alt='category' />
          </div>
          <div>식물</div>
        </S.Category>
        <S.Category>
          <div>
            <img src={categoryMushroom} alt='category' />
          </div>
          <div>버섯</div>
        </S.Category>
      </S.CategoryContainer>
      <S.CategoryContainer>
        <S.Category>
          <div>
            <img src={categoryRock} alt='category' />
          </div>
          <div>바위</div>
        </S.Category>
        <S.Category>
          <div>
            <img src={categoryWooden} alt='category' />
          </div>
          <div>나무 소품</div>
        </S.Category>
        <S.Category>
          <div>
            <img src={categoryLight} alt='category' />
          </div>
          <div>라이트</div>
        </S.Category>
      </S.CategoryContainer>
    </S.Container>
  );
}

function Mobile() {
  return <div>Mobile</div>;
}
