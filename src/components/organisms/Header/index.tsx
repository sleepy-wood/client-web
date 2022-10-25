import React, { useCallback } from 'react';
import { FaSearch, FaRegUserCircle, FaWallet, FaShoppingBasket } from 'react-icons/fa';
import { useMediaQuery } from 'react-responsive';

import * as S from './styled';
import { MEDIA } from '../../../constants';

const { minWidth } = MEDIA;

export default function Header() {
  const isDesktop = useMediaQuery({ minWidth });

  return isDesktop ? <Desktop /> : <Mobile />;
}

function Desktop() {
  const showSearch = useMediaQuery({ minWidth: 768 });

  const goHome = useCallback(e => {
    console.log('go home');
  }, []);

  return (
    <S.Container>
      <S.AppName onClick={goHome}>Sleepy Wood</S.AppName>
      {showSearch && (
        <S.SearchContainer>
          <div>
            <FaSearch color='#a0a0a0' size={18} />
          </div>
          <input type='text' placeholder='Search Items' />
        </S.SearchContainer>
      )}
      <S.SubContainer>
        <S.MenuContainer>
          <div>Market</div>
          <div>Info</div>
        </S.MenuContainer>
        <S.IconContainer>
          <div>
            <FaRegUserCircle size={32} />
          </div>
          <div>
            <FaWallet size={32} />
          </div>
          <div>
            <FaShoppingBasket size={32} />
          </div>
        </S.IconContainer>
      </S.SubContainer>
    </S.Container>
  );
}

function Mobile() {
  return <div>MobileHeader</div>;
}
