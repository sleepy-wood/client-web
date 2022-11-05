import React, { useCallback, useState } from 'react';
import {
  FaSearch,
  FaRegUserCircle,
  FaUserCircle,
  FaWallet,
  FaShoppingBasket,
} from 'react-icons/fa';
import { useMediaQuery } from 'react-responsive';

import * as S from './styled';
import metamask from '../../../assets/images/metamask-fox.svg';
import { MEDIA } from '../../../constants';

const { minWidth } = MEDIA;
type Props = {
  connectWallet: (e: React.MouseEvent) => Promise<void>;
};

export default function Header({ connectWallet }: Props) {
  const isDesktop = useMediaQuery({ minWidth });

  return isDesktop ? <Desktop connectWallet={connectWallet} /> : <Mobile />;
}

function Desktop({ connectWallet }: Props) {
  const showSearch = useMediaQuery({ minWidth: 768 });
  const [showWallet, setShowWallet] = useState<boolean>(false);

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
          <div>MARKET</div>
          <div>INFO</div>
        </S.MenuContainer>
        <S.IconContainer>
          <div>
            <FaRegUserCircle size={32} />
          </div>
          <div
            onClick={() => {
              setShowWallet(!showWallet);
            }}>
            <FaWallet size={32} />
            {showWallet && (
              <S.InfoContainer>
                <div>
                  <S.InfoIconContainer>
                    <FaUserCircle size={24} />
                  </S.InfoIconContainer>
                  <div>My wallet</div>
                </div>
                <div onClick={connectWallet}>
                  <S.InfoWallet>
                    <img width={24} src={metamask} alt='metamask' />
                  </S.InfoWallet>
                  <div>Metamask</div>
                </div>
              </S.InfoContainer>
            )}
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
