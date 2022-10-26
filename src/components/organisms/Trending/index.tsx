import React from 'react';
import { useMediaQuery } from 'react-responsive';

import * as S from './styled';
import profile1 from '../../../assets/images/profile1.png';
import profile2 from '../../../assets/images/profile2.png';
import profile3 from '../../../assets/images/profile3.png';
import profile4 from '../../../assets/images/profile4.png';
import profile5 from '../../../assets/images/profile5.png';
import profile6 from '../../../assets/images/profile6.png';
import profile7 from '../../../assets/images/profile7.png';
import profile8 from '../../../assets/images/profile8.png';
import profile9 from '../../../assets/images/profile9.png';
import profile10 from '../../../assets/images/profile10.png';
import { MEDIA } from '../../../constants';

const { minWidth } = MEDIA;

export default function Trending() {
  const isDesktop = useMediaQuery({ minWidth });

  return isDesktop ? <Desktop /> : <Mobile />;
}

function Desktop() {
  return (
    <S.Container>
      <S.TitleContainer>
        <S.Title active={true}>Trending</S.Title>
        <S.Title>Top</S.Title>
      </S.TitleContainer>
      <S.TopTenContainer>
        <S.FiveContainer>
          <S.SubTitleContainer>
            <S.SubTitle>CREATOR</S.SubTitle>
            <S.SubTitle>최저가</S.SubTitle>
            <S.SubTitle>에셋 수</S.SubTitle>
          </S.SubTitleContainer>
          <S.ProfileContainer>
            {[1, 2, 3, 4, 5].map((_, index) => (
              <S.Profile key={index}>
                <div>
                  <div>{index + 1}</div>
                  <div>
                    <img
                      src={
                        index == 0
                          ? profile1
                          : index == 1
                          ? profile2
                          : index == 2
                          ? profile3
                          : index == 3
                          ? profile4
                          : profile5
                      }
                      alt='profile'
                    />
                  </div>
                  <div>User Nickname</div>
                </div>
                <div>
                  <p>0.32 LOG</p>
                </div>
                <div>
                  <p>13</p>
                </div>
              </S.Profile>
            ))}
          </S.ProfileContainer>
        </S.FiveContainer>
        <S.FiveContainer>
          <S.SubTitleContainer>
            <S.SubTitle>CREATOR</S.SubTitle>
            <S.SubTitle>최저가</S.SubTitle>
            <S.SubTitle>에셋 수</S.SubTitle>
          </S.SubTitleContainer>
          <S.ProfileContainer>
            {[1, 2, 3, 4, 5].map((_, index) => (
              <S.Profile key={index}>
                <div>
                  <div>{index + 6}</div>
                  <div>
                    <img
                      src={
                        index == 0
                          ? profile6
                          : index == 1
                          ? profile7
                          : index == 2
                          ? profile8
                          : index == 3
                          ? profile9
                          : profile10
                      }
                      alt='profile'
                    />
                  </div>
                  <div>User Nickname</div>
                </div>
                <div>
                  <p>0.32 LOG</p>
                </div>
                <div>
                  <p>13</p>
                </div>
              </S.Profile>
            ))}
          </S.ProfileContainer>
        </S.FiveContainer>
      </S.TopTenContainer>
    </S.Container>
  );
}

function Mobile() {
  return <div>Mobile</div>;
}
