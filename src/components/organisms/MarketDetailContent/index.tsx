import React from 'react';

import * as S from './styled';
import banner from '../../../assets/images/banner.avif';
import profile from '../../../assets/images/profile1.png';

export default function MarketDetailContent() {
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
              <S.Description>Explore the colorful world of Gucci</S.Description>
            </S.ProfileContainer>
            <S.CollectionInfo>
              <div>컬렉션 정보</div>
              <div>
                <div>에셋</div>
                <div>8</div>
              </div>
            </S.CollectionInfo>
          </S.Profile>
        </S.Info>
        <S.Items></S.Items>
      </S.Content>
    </S.Container>
  );
}
