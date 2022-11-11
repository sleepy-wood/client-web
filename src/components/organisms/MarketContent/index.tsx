import React, { useEffect, useState } from 'react';
import { useMediaQuery } from 'react-responsive';
import { useParams } from 'react-router-dom';

import * as C from '../../../constants';
import * as S from './styled';
import MarketContentAll from '../../molecules/MarketContentAll';
import MarketContentCollection from '../../molecules/MarketContentCollection';
import MarketContentEmoticon from '../../molecules/MarketContentEmoticon';
import MarketContentFlower from '../../molecules/MarketContentFlower';
import MarketContentLight from '../../molecules/MarketContentLight';
import MarketContentMushroom from '../../molecules/MarketContentMushroom';
import MarketContentPlants from '../../molecules/MarketContentPlants';
import MarketContentRock from '../../molecules/MarketContentRock';
import MarketContentWooden from '../../molecules/MarketContentWooden';

const { minWidth } = C.MEDIA;

export default function MarketContent() {
  const isDesktop = useMediaQuery({ minWidth });

  return isDesktop ? <Desktop /> : <Mobile />;
}

function Desktop() {
  const { category } = useParams<string>();
  const [active, setActive] = useState<number>(0);

  useEffect(() => {
    switch (category) {
      case 'collection':
        setActive(1);
        break;
      case 'emoticon':
        setActive(2);
        break;
      case 'flower':
        setActive(3);
        break;
      case 'plants':
        setActive(4);
        break;
      case 'mushroom':
        setActive(5);
        break;
      case 'rock':
        setActive(6);
        break;
      case 'wooden':
        setActive(7);
        break;
      case 'light':
        setActive(8);
        break;
      default:
        setActive(0);
        break;
    }
  }, [category]);

  return (
    <S.Container>
      {active === 0 && <MarketContentAll />}
      {active === 1 && <MarketContentCollection />}
      {active === 2 && <MarketContentEmoticon />}
      {active === 3 && <MarketContentFlower />}
      {active === 4 && <MarketContentPlants />}
      {active === 5 && <MarketContentMushroom />}
      {active === 6 && <MarketContentRock />}
      {active === 7 && <MarketContentWooden />}
      {active === 8 && <MarketContentLight />}
    </S.Container>
  );
}

function Mobile() {
  return <div>Mobile</div>;
}
