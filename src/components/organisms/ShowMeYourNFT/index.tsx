import React from 'react';
import { useMediaQuery } from 'react-responsive';
import Slider, { Settings } from 'react-slick';

import * as S from './styled';
import beauty from '../../../assets/images/beauty.png';
import { MEDIA } from '../../../constants';

const { minWidth } = MEDIA;

export default function ShowMeYourNFT() {
  const isDesktop = useMediaQuery({ minWidth });

  return isDesktop ? <Desktop /> : <Mobile />;
}

function Desktop() {
  const settings: Settings = {
    dots: false,
    infinite: true,
    autoplay: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    arrows: false,
  };

  return (
    <S.Container>
      <S.Header>
        <p>SHOW ME YOUR NFT</p>
      </S.Header>
      <div>
        <Slider {...settings}>
          <S.Img>
            <img src={beauty} alt='beauty tree' />
          </S.Img>
          <S.Img>
            <img src={beauty} alt='beauty tree' />
          </S.Img>
          <S.Img>
            <img src={beauty} alt='beauty tree' />
          </S.Img>
          <S.Img>
            <img src={beauty} alt='beauty tree' />
          </S.Img>
          <S.Img>
            <img src={beauty} alt='beauty tree' />
          </S.Img>
          <S.Img>
            <img src={beauty} alt='beauty tree' />
          </S.Img>
          <S.Img>
            <img src={beauty} alt='beauty tree' />
          </S.Img>
        </Slider>
      </div>
    </S.Container>
  );
}

function Mobile() {
  return <div>Mobile</div>;
}
