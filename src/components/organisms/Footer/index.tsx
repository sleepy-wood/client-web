import React from 'react';
import { useMediaQuery } from 'react-responsive';

import * as S from './styled';
import logo from '../../../assets/images/logo.png';
import logoTitle from '../../../assets/images/logo-title.png';
import { MEDIA } from '../../../constants';

const { minWidth } = MEDIA;

export default function Footer() {
  const isDesktop = useMediaQuery({ minWidth });

  return isDesktop ? <Desktop /> : <Mobile />;
}

function Desktop() {
  return (
    <React.Fragment>
      <S.Container>
        <div>
          <div>
            <div>
              <img src={logo} alt='logo' />
            </div>
            <div>
              <img src={logoTitle} alt='logo-title' />
            </div>
          </div>
          <div>
            The world’s first sleep metaverse and largest digital marketplace for crypto
            collectibles and non-fungible tokens (NFTs). Buy, sell, and discover exclusive digital
            items.
          </div>
        </div>
      </S.Container>
      <S.Bottom>
        <div>
          <div>© 2022 Team-Buildup</div>
          <div className='flex'>
            <div>Privacy Policy</div>
            <div>Terms of Service</div>
          </div>
        </div>
      </S.Bottom>
    </React.Fragment>
  );
}

function Mobile() {
  return <div>Mobile</div>;
}
