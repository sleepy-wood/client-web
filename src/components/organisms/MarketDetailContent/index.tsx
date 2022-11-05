import React from 'react';
import { useMediaQuery } from 'react-responsive';

import * as S from './styled';
import banner from '../../../assets/images/banner.avif';
import profile from '../../../assets/images/profile1.png';
import tree1 from '../../../assets/images/tree1.png';
import tree2 from '../../../assets/images/tree2.png';
import wood from '../../../assets/images/wood.png';
import { MEDIA } from '../../../constants';

const { minWidth } = MEDIA;

export default function MarketDetailContent() {
  const isDesktop = useMediaQuery({ minWidth });

  return isDesktop ? <Desktop /> : <Mobile />;
}

function Desktop() {
  return (
    <S.Container>
      <S.Banner>
        <img src={banner} alt='Banner' />
      </S.Banner>
      <div style={{ width: '100%', height: '300px' }}></div>
      <S.Content>
        <S.Info>
          <S.ProfileImg>
            <img src={profile} alt='profile' />
          </S.ProfileImg>
          <S.Profile>
            <S.ProfileContainer>
              <S.Name>User Nickname</S.Name>
              <S.Description>안녕하세요. 메타버스 플랫폼 슬리피우드입니다.</S.Description>
            </S.ProfileContainer>
            <S.CollectionInfo>
              <div>컬렉션 정보</div>
              <div>
                <div>에셋</div>
                <div>2</div>
              </div>
            </S.CollectionInfo>
          </S.Profile>
        </S.Info>
        <S.Items>
          <S.Item>
            <S.ItemImg>
              <img src={tree1} alt='tree' />
            </S.ItemImg>
            <S.ItemName>나무 이름</S.ItemName>
            <S.ItemCount>1 / 1</S.ItemCount>
            <S.ItemPrice>
              <div>
                <img src={wood} alt='wood' />
              </div>
              <div>
                <div>3150.00</div>
                <div>2923.03 USD</div>
              </div>
            </S.ItemPrice>
          </S.Item>
          <S.Item>
            <S.ItemImg>
              <img src={tree2} alt='tree' />
            </S.ItemImg>
            <S.ItemName>나무 이름</S.ItemName>
            <S.ItemCount>1 / 1</S.ItemCount>
            <S.ItemPrice>
              <div>
                <img src={wood} alt='wood' />
              </div>
              <div>
                <div>3150.00</div>
                <div>2923.03 USD</div>
              </div>
            </S.ItemPrice>
          </S.Item>
        </S.Items>
      </S.Content>
    </S.Container>
  );
}

function Mobile() {
  return <div>Mobile</div>;
}
