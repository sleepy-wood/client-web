import React, { useCallback, useState } from 'react';
import { useMediaQuery } from 'react-responsive';

import * as S from './styled';
import * as I from '../../../interfaces';
import { MEDIA } from '../../../constants';

const { minWidth } = MEDIA;

export type Props = {
  trending: I.User[];
  top: I.User[];
};

export default function Trending({ trending, top }: Props) {
  const isDesktop = useMediaQuery({ minWidth });

  return isDesktop ? <Desktop trending={trending} top={top} /> : <Mobile />;
}

function Desktop({ trending, top }: Props) {
  const [trendingActive, setTrendingActive] = useState<boolean>(true);
  const [topActive, setTopActive] = useState<boolean>(false);

  const activeTitle = useCallback((e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();

    const target = e.target as HTMLDivElement;
    const { className } = target;
    if (className.includes('trend')) {
      setTrendingActive(true);
      setTopActive(false);
    } else if (className.includes('top')) {
      setTrendingActive(false);
      setTopActive(true);
    } else {
      return;
    }
  }, []);

  return (
    <S.Container>
      <S.TitleContainer onClick={activeTitle}>
        <S.Title className='trend' active={trendingActive}>
          Trending
        </S.Title>
        <S.Title className='top' active={topActive}>
          Top
        </S.Title>
      </S.TitleContainer>
      <S.TopTenContainer>
        <S.FiveContainer>
          <S.SubTitleContainer>
            <S.SubTitle>CREATOR</S.SubTitle>
            <S.SubTitle>최저가</S.SubTitle>
            <S.SubTitle>에셋 수</S.SubTitle>
          </S.SubTitleContainer>
          <S.ProfileContainer>
            {trendingActive &&
              trending.map(
                (user, index) =>
                  index < 5 && (
                    <S.Profile key={index}>
                      <div>
                        <div>{index + 1}</div>
                        <div>
                          <img src={user.profileImg} alt='profile' />
                        </div>
                        <div>{user.nickname}</div>
                      </div>
                      <div>
                        <p>0.32 ETH</p>
                      </div>
                      <div>
                        <p>{user.productCount}</p>
                      </div>
                    </S.Profile>
                  ),
              )}
            {topActive &&
              top.map(
                (user, index) =>
                  index < 5 && (
                    <S.Profile key={index}>
                      <div>
                        <div>{index + 1}</div>
                        <div>
                          <img src={user.profileImg} alt='profile' />
                        </div>
                        <div>{user.nickname}</div>
                      </div>
                      <div>
                        <p>0.32 ETH</p>
                      </div>
                      <div>
                        <p>{user.productCount}</p>
                      </div>
                    </S.Profile>
                  ),
              )}
          </S.ProfileContainer>
        </S.FiveContainer>
        <S.FiveContainer>
          <S.SubTitleContainer>
            <S.SubTitle>CREATOR</S.SubTitle>
            <S.SubTitle>최저가</S.SubTitle>
            <S.SubTitle>에셋 수</S.SubTitle>
          </S.SubTitleContainer>
          <S.ProfileContainer>
            {trendingActive &&
              trending.map(
                (user, index) =>
                  index >= 5 && (
                    <S.Profile key={index}>
                      <div>
                        <div>{index + 1}</div>
                        <div>
                          <img src={user.profileImg} alt='profile' />
                        </div>
                        <div>{user.nickname}</div>
                      </div>
                      <div>
                        <p>0.32 ETH</p>
                      </div>
                      <div>
                        <p>{user.productCount}</p>
                      </div>
                    </S.Profile>
                  ),
              )}
            {topActive &&
              top.map(
                (user, index) =>
                  index >= 5 && (
                    <S.Profile key={index}>
                      <div>
                        <div>{index + 1}</div>
                        <div>
                          <img src={user.profileImg} alt='profile' />
                        </div>
                        <div>{user.nickname}</div>
                      </div>
                      <div>
                        <p>0.32 ETH</p>
                      </div>
                      <div>
                        <p>{user.productCount}</p>
                      </div>
                    </S.Profile>
                  ),
              )}
          </S.ProfileContainer>
        </S.FiveContainer>
      </S.TopTenContainer>
    </S.Container>
  );
}

function Mobile() {
  return <div>Mobile</div>;
}
