import React, { useCallback, useEffect, useState } from 'react';
import Slider, { Settings } from 'react-slick';
import { useMediaQuery } from 'react-responsive';
import { useLocation, useNavigate } from 'react-router-dom';

import * as C from '../../../constants';
import * as I from '../../../interfaces';
import * as S from './styled';
import { MEDIA } from '../../../constants';

const { minWidth } = MEDIA;

type Props = {
  collections: I.Product[];
};

export default function ShowMeYourNFT({ collections }: Props) {
  const isDesktop = useMediaQuery({ minWidth });

  return isDesktop ? <Desktop collections={collections} /> : <Mobile />;
}

function Desktop({ collections }: Props) {
  const location = useLocation();
  const navigate = useNavigate();
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
          {collections.map((collection, index) => (
            <S.Video
              key={index}
              onClick={moveToPath.bind(
                null,
                C.PATH.ITEM_DETAIL.PATH.replace(':id', collection.id.toString()),
              )}>
              <video
                controls={false}
                muted={true}
                autoPlay={true}
                loop={true}
                src={
                  collection.productImages.filter(e => e.mimeType.includes('video'))[0].path
                }></video>
            </S.Video>
          ))}
        </Slider>
      </div>
    </S.Container>
  );
}

function Mobile() {
  return <div>Mobile</div>;
}
