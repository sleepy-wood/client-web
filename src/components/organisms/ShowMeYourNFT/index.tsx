import React, { useCallback, useEffect, useState } from 'react';
import Slider, { Settings } from 'react-slick';
import { useMediaQuery } from 'react-responsive';
import { useLocation, useNavigate } from 'react-router-dom';

import * as C from '../../../constants';
import * as I from '../../../interfaces';
import * as S from './styled';
import day01 from '../../../assets/images/DAY01.png';
import sunset01 from '../../../assets/images/Sunset01.png';
import night01 from '../../../assets/images/Night01.png';
import beauty from '../../../assets/images/beauty.png';
import beauty2 from '../../../assets/images/beauty2.png';
import { MEDIA } from '../../../constants';

const { minWidth } = MEDIA;

export default function ShowMeYourNFT() {
  const isDesktop = useMediaQuery({ minWidth });

  return isDesktop ? <Desktop /> : <Mobile />;
}

function Desktop() {
  const location = useLocation();
  const navigate = useNavigate();
  const [collections, setCollections] = useState<I.Product[]>(null);
  const settings: Settings = {
    dots: false,
    infinite: true,
    autoplay: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    arrows: false,
  };

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

  useEffect(() => {
    function fetch() {}

    fetch();
  }, []);

  return (
    <S.Container>
      <S.Header>
        <p>SHOW ME YOUR NFT</p>
      </S.Header>
      <div>
        <Slider {...settings}>
          <S.Img onClick={moveToPath.bind(null, C.PATH.ITEM_DETAIL.PATH.replace(':id', '13'))}>
            <img src={day01} alt='beauty tree' />
          </S.Img>
          <S.Img onClick={moveToPath.bind(null, C.PATH.ITEM_DETAIL.PATH.replace(':id', '17'))}>
            <img src={beauty} alt='beauty tree' />
          </S.Img>
          <S.Img onClick={moveToPath.bind(null, C.PATH.ITEM_DETAIL.PATH.replace(':id', '17'))}>
            <img src={sunset01} alt='beauty tree' />
          </S.Img>
          <S.Img onClick={moveToPath.bind(null, C.PATH.ITEM_DETAIL.PATH.replace(':id', '14'))}>
            <img src={night01} alt='beauty tree' />
          </S.Img>
          <S.Img onClick={moveToPath.bind(null, C.PATH.ITEM_DETAIL.PATH.replace(':id', '17'))}>
            <img src={beauty2} alt='beauty tree' />
          </S.Img>
        </Slider>
      </div>
    </S.Container>
  );
}

function Mobile() {
  return <div>Mobile</div>;
}
