import React, { useCallback, useState } from 'react';
import { AiFillShop } from 'react-icons/ai';
import {
  FaSearch,
  FaRegUserCircle,
  FaUserCircle,
  FaWallet,
  FaShoppingCart,
  FaGem,
} from 'react-icons/fa';
import { useMediaQuery } from 'react-responsive';
import { useLocation, useNavigate } from 'react-router-dom';

import * as C from '../../../constants';
import * as S from './styled';
import metamask from '../../../assets/images/metamask-fox.svg';
import { MEDIA } from '../../../constants';

const { minWidth } = MEDIA;
type Props = {
  connectWallet: (e: React.MouseEvent) => Promise<void>;
};

export default function Header() {
  const isDesktop = useMediaQuery({ minWidth });
  const [account, setAccount] = useState<string>('');

  const connectWallet = useCallback(
    async (e: React.MouseEvent) => {
      e.preventDefault();
      e.stopPropagation();

      const accounts = await window.ethereum.request({
        method: 'eth_requestAccounts',
      });
      setAccount(accounts[0]);
      console.log(account);
    },
    [account],
  );

  return isDesktop ? <Desktop connectWallet={connectWallet} /> : <Mobile />;
}

function Desktop({ connectWallet }: Props) {
  const location = useLocation();
  const navigate = useNavigate();
  const showSearch = useMediaQuery({ minWidth: 768 });
  const [showMyInfo, setShowMyInfo] = useState<boolean>(false);
  const [showWallet, setShowWallet] = useState<boolean>(false);

  const moveToPath = useCallback(
    (path: string, e: React.MouseEvent) => {
      e.preventDefault();
      e.stopPropagation();

      if (location.pathname !== path) {
        scrollTo(0, 0);
        setShowMyInfo(false);
        setShowWallet(false);
        navigate(path);
      }
    },
    [location.pathname, navigate],
  );

  return (
    <React.Fragment>
      <S.Container>
        <div>
          <S.AppName onClick={moveToPath.bind(null, C.PATH.HOME)}>Sleepywood</S.AppName>
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
              <div onClick={moveToPath.bind(null, C.PATH.MARKET.ALL)}>MARKET</div>
              <div onClick={moveToPath.bind(null, C.PATH.DASHBOARD)}>DASHBOARD</div>
            </S.MenuContainer>
            <S.IconContainer>
              <div
                onClick={() => {
                  setShowWallet(false);
                  setShowMyInfo(!showMyInfo);
                }}>
                <FaRegUserCircle size={32} />
                {showMyInfo && (
                  <S.InfoContainer>
                    <div
                      style={{ cursor: 'pointer' }}
                      onClick={moveToPath.bind(null, C.PATH.MARKET_REGISTER)}>
                      <S.InfoIconContainer>
                        <AiFillShop size={24} />
                      </S.InfoIconContainer>
                      <div>에셋 판매</div>
                    </div>
                    <div
                      style={{ cursor: 'pointer' }}
                      onClick={moveToPath.bind(null, C.PATH.MARKET_REGISTER)}>
                      <S.InfoIconContainer>
                        <FaGem size={24} />
                      </S.InfoIconContainer>
                      <div>에셋 조회</div>
                    </div>
                  </S.InfoContainer>
                )}
              </div>
              <div
                onClick={() => {
                  setShowMyInfo(false);
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
                <FaShoppingCart size={32} />
              </div>
            </S.IconContainer>
          </S.SubContainer>
        </div>
      </S.Container>
    </React.Fragment>
  );
}

function Mobile() {
  return <div>MobileHeader</div>;
}
