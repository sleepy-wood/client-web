import React, { useCallback, useEffect, useState } from 'react';
import Drawer from 'react-modern-drawer';
import { AiFillShop } from 'react-icons/ai';
import {
  FaSearch,
  FaRegUserCircle,
  FaUserCircle,
  FaWallet,
  FaShoppingCart,
  FaHeart,
  FaGem,
  FaRegCheckSquare,
  FaCheckSquare,
  FaHistory,
} from 'react-icons/fa';
import { useMediaQuery } from 'react-responsive';
import { useLocation, useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';

import * as C from '../../../constants';
import * as H from '../../../hooks';
import * as I from '../../../interfaces';
import * as S from './styled';
import beauty from '../../../assets/images/beauty.png';
import errorImg from '../../../assets/images/cate_plants.webp';
import metamask from '../../../assets/images/metamask-fox.svg';
import { MEDIA } from '../../../constants';
import { RootState } from '../../../reducers';

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

  const { user } = useSelector((state: RootState) => state.user);
  const { cartItem } = useSelector((state: RootState) => state.cart);
  const { wishlistItem } = useSelector((state: RootState) => state.wishlist);
  const [cartItemTotalPrice, setCartItemTotalPrice] = useState<number>(0);
  const [wishlistItemTotalPrice, setWishlistItemTotalPrice] = useState<number>(0);

  const [isOpenCart, setIsOpenCart] = useState(false);
  const [isOpenWishtlist, setIsOpenWishtlist] = useState(false);
  const [showMyInfo, setShowMyInfo] = useState<boolean>(false);
  const [showWallet, setShowWallet] = useState<boolean>(false);
  const [query, onChangeQuery] = H.useInput<string>('');

  const toggleCart = useCallback(() => {
    setIsOpenWishtlist(false);
    setShowMyInfo(false);
    setShowWallet(false);
    setIsOpenCart(prevState => !prevState);
  }, []);

  const toggleWishlist = useCallback(() => {
    setIsOpenCart(false);
    setShowMyInfo(false);
    setShowWallet(false);
    setIsOpenWishtlist(prevState => !prevState);
  }, []);

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

  useEffect(() => {
    setCartItemTotalPrice(cartItem.reduce((acc, cur) => acc + Number(cur.product.price), 0));
    setWishlistItemTotalPrice(
      wishlistItem.reduce((acc, cur) => acc + Number(cur.product.price), 0),
    );
  }, [cartItem, wishlistItem]);

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
              <input
                type='text'
                placeholder='Search Items'
                value={query}
                onChange={onChangeQuery}
                onKeyDown={e => {
                  if (e.key === 'Enter') {
                    const value = e.currentTarget.value;
                    if (!value) {
                      return alert('검색어를 입력해주세요.');
                    }

                    if (value.length < 2) {
                      return alert('검색어는 2글자 이상 입력해주세요.');
                    }

                    return navigate(`${C.PATH.SEARCH_RESULT}?query=${query}`);
                  }
                }}
              />
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
                  setIsOpenCart(false);
                  setIsOpenWishtlist(false);
                  setShowWallet(false);
                  setShowMyInfo(prevState => !prevState);
                }}>
                <FaRegUserCircle size={26} />
                {showMyInfo && (
                  <S.InfoContainer>
                    <div
                      style={{ cursor: 'pointer' }}
                      onClick={moveToPath.bind(null, C.PATH.MARKET_REGISTER)}>
                      <S.InfoIconContainer>
                        <AiFillShop size={20} />
                      </S.InfoIconContainer>
                      <div>에셋 판매</div>
                    </div>
                    <div
                      style={{ cursor: 'pointer' }}
                      onClick={moveToPath.bind(
                        null,
                        C.PATH.MARKET_DETAIL.PATH.replace(':id', user.id.toString()),
                      )}>
                      <S.InfoIconContainer>
                        <FaGem size={20} />
                      </S.InfoIconContainer>
                      <div>에셋 조회</div>
                    </div>
                    <div
                      style={{ cursor: 'pointer' }}
                      onClick={moveToPath.bind(null, C.PATH.MARKET_HISTORY.LIST)}>
                      <S.InfoIconContainer>
                        <FaHistory size={20} />
                      </S.InfoIconContainer>
                      <div>주문 내역</div>
                    </div>
                  </S.InfoContainer>
                )}
              </div>
              <div
                onClick={() => {
                  setIsOpenCart(false);
                  setIsOpenWishtlist(false);
                  setShowMyInfo(false);
                  setShowWallet(prevState => !prevState);
                }}>
                <FaWallet size={26} />
                {showWallet && (
                  <S.InfoContainer>
                    <div>
                      <S.InfoIconContainer>
                        <FaUserCircle size={20} />
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
              <div onClick={toggleCart}>
                <FaShoppingCart size={26} />
              </div>
              <div onClick={toggleWishlist}>
                <FaHeart size={26} />
              </div>
            </S.IconContainer>
          </S.SubContainer>
        </div>
      </S.Container>
      <Drawer
        open={isOpenCart}
        onClose={toggleCart}
        direction='right'
        enableOverlay={false}
        style={{
          height: 'calc(100vh - 72px)',
          top: '72px',
          background: 'rgba(255, 255, 255, 0.9)',
          backdropFilter: 'blur(12px)',
          borderRadius: '12px 0 0 12px',
          padding: '24px',
          overflowY: 'scroll',
        }}
        size={500}>
        <S.CartTitle>
          <div>장바구니</div>
          <div>({cartItem.length}개)</div>
        </S.CartTitle>
        <S.Tooltip>
          <div>
            <FaRegCheckSquare size={18} />
          </div>
          <div>전체선택</div>
          <div>선택삭제</div>
        </S.Tooltip>
        <S.ItemList>
          {cartItem.map((item, index) => (
            <S.Item key={index}>
              <S.ItemCheckbox id={`cart-check-${index}`} type='checkbox' />
              <label htmlFor={`cart-check-${index}`}></label>
              <div>
                <img
                  src={
                    item.product.category === I.ProductCategory.collection
                      ? item.product.productImages[1].path
                      : item.product.productImages[item.product.productImages.length - 1].path
                  }
                  style={{
                    objectFit:
                      item.product.category === I.ProductCategory.collection ? 'cover' : 'contain',
                    objectPosition:
                      item.product.category === I.ProductCategory.collection ? '0 -18px' : 'unset',
                  }}
                  alt={`${item.product.name}'s represent image`}
                  onError={(e: React.SyntheticEvent<HTMLImageElement, Event>) => {
                    e.currentTarget.src = errorImg;
                  }}
                />
              </div>
              <div>
                <div>상품 이름</div>
                <div
                  style={{ cursor: 'pointer' }}
                  onClick={moveToPath.bind(
                    null,
                    C.PATH.ITEM_DETAIL.PATH.replace(':id', item.product.id.toString()),
                  )}>
                  {item.product.name}
                </div>
              </div>
              <div>
                <div>크리에이터</div>
                <div>{item.product.user.nickname}</div>
              </div>
              <div>
                <div>가격</div>
                <div>
                  {Number(item.product.price).toFixed(2) === '0.00'
                    ? 'FREE'
                    : Number(item.product.price).toFixed(2) + ' ETH'}
                </div>
              </div>
            </S.Item>
          ))}
        </S.ItemList>
        <S.PaymentContainer>
          <S.PaymentTitle>결제 예정금액</S.PaymentTitle>
          <S.TotalPrice>
            <div>합계</div>
            <div>
              {cartItemTotalPrice.toFixed(2) === '0.00'
                ? 'FREE'
                : cartItemTotalPrice.toFixed(2) + ' ETH'}
            </div>
          </S.TotalPrice>
        </S.PaymentContainer>
        <S.CartButton>
          <div>주문하기</div>
        </S.CartButton>
      </Drawer>
      <Drawer
        open={isOpenWishtlist}
        onClose={toggleWishlist}
        direction='right'
        enableOverlay={false}
        style={{
          height: 'calc(100vh - 72px)',
          top: '72px',
          background: 'rgba(255, 255, 255, 0.9)',
          backdropFilter: 'blur(12px)',
          borderRadius: '12px 0 0 12px',
          padding: '24px',
          overflowY: 'scroll',
        }}
        size={500}>
        <S.CartTitle>
          <div>위시리스트</div>
          <div>(2개)</div>
        </S.CartTitle>
        <S.Tooltip>
          <div>
            <FaRegCheckSquare size={18} />
          </div>
          <div>전체선택</div>
          <div>선택삭제</div>
        </S.Tooltip>
        <S.ItemList>
          <S.Item>
            <S.ItemCheckbox id={`wishlist-check-${1}`} type='checkbox' />
            <label htmlFor={`wishlist-check-${1}`}></label>
            <div>
              <img src={beauty} alt='beauty' />
            </div>
            <div>이름</div>
            <div>크리에이터</div>
            <div>1.2ETH</div>
          </S.Item>
          <S.Item>
            <S.ItemCheckbox id={`wishlist-check-${2}`} type='checkbox' />
            <label htmlFor={`wishlist-check-${2}`}></label>
            <div>
              <img src={beauty} alt='beauty' />
            </div>
            <div>이름</div>
            <div>크리에이터</div>
            <div>1.2ETH</div>
          </S.Item>
        </S.ItemList>
        <S.CartButton>
          <div>장바구니로 이동하기</div>
        </S.CartButton>
      </Drawer>
    </React.Fragment>
  );
}

function Mobile() {
  return <div>MobileHeader</div>;
}
