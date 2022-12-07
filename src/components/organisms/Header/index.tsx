import React, { useCallback, useEffect, useState } from 'react';
import Drawer from 'react-modern-drawer';
import Web3 from 'web3';
import Web3Utils from 'web3-utils';
import { useDispatch, useSelector } from 'react-redux';
import { AiFillShop } from 'react-icons/ai';
import {
  FaSearch,
  FaUserCircle,
  FaWallet,
  FaShoppingCart,
  FaHeart,
  FaGem,
  FaHistory,
  FaRegWindowClose,
} from 'react-icons/fa';
import { useMediaQuery } from 'react-responsive';
import { useLocation, useNavigate } from 'react-router-dom';

import * as API from '../../../apis';
import * as C from '../../../constants';
import * as H from '../../../hooks';
import * as I from '../../../interfaces';
import * as S from './styled';
import logo from '../../../assets/images/logo.png';
import logoTitle from '../../../assets/images/logo-title.png';
import errorImg from '../../../assets/images/cate_plants.webp';
import metamask from '../../../assets/images/metamask-fox.svg';
import { MEDIA } from '../../../constants';
import { RootState } from '../../../reducers';
import { setCartItem, pushCartItem, popCartItem } from '../../../reducers/cart.reducer';
import { setWishlistItem, popWishlistItem } from '../../../reducers/wishlist.reducer';

const { minWidth } = MEDIA;

export default function Header() {
  const isDesktop = useMediaQuery({ minWidth });

  return isDesktop ? <Desktop /> : <Mobile />;
}

function Desktop() {
  const dispatch = useDispatch();
  const location = useLocation();
  const navigate = useNavigate();
  const showSearch = useMediaQuery({ minWidth: 768 });

  const { user } = useSelector((state: RootState) => state.user);
  const { cartItem } = useSelector((state: RootState) => state.cart);
  const { wishlistItem } = useSelector((state: RootState) => state.wishlist);

  const [isOpenCart, setIsOpenCart] = useState(false);
  const [isOpenWishtlist, setIsOpenWishtlist] = useState(false);
  const [showMyInfo, setShowMyInfo] = useState<boolean>(false);
  const [showWallet, setShowWallet] = useState<boolean>(false);
  const [cartItemTotalPrice, setCartItemTotalPrice] = useState<number>(0);
  const [checkCartItems, setCheckCartItems] = useState<number[]>([]);
  const [checkWishlistItems, setCheckWishlistItems] = useState<number[]>([]);

  const [query, onChangeQuery] = H.useInput<string>('');

  const connectWallet = useCallback(async (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();

    await window.ethereum.request({
      method: 'eth_requestAccounts',
    });
  }, []);

  const toggleCart = useCallback(async () => {
    if (isOpenCart) {
      const [cartItems, error] = await API.cart.getCartItems();

      if (error) {
        console.log(error.data.error.reason);
      }

      dispatch(setCartItem({ cartItems }));
    }

    setIsOpenWishtlist(false);
    setShowMyInfo(false);
    setShowWallet(false);
    setIsOpenCart(prevState => !prevState);
  }, [dispatch, isOpenCart]);

  const toggleWishlist = useCallback(async () => {
    if (isOpenWishtlist) {
      const [wishlistItems, error] = await API.wishlist.getWishlistItems();

      if (error) {
        console.log(error.data.error.reason);
      }

      dispatch(setWishlistItem({ wishlistItems }));
    }

    setIsOpenCart(false);
    setShowMyInfo(false);
    setShowWallet(false);
    setIsOpenWishtlist(prevState => !prevState);
  }, [dispatch, isOpenWishtlist]);

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

  const checkSingleCart = useCallback(
    (id: number, e: React.ChangeEvent<HTMLInputElement>) => {
      if (e.currentTarget.checked) {
        setCheckCartItems(prev => [...prev, id]);
      } else {
        setCheckCartItems(checkCartItems.filter(el => el !== id));
      }
    },
    [checkCartItems],
  );

  const checkAllCart = useCallback(
    (e: React.MouseEvent<HTMLDivElement>) => {
      setCheckCartItems(cartItem.map(el => el.product.id));
    },
    [cartItem],
  );

  const checkSingleWishlist = useCallback(
    (id: number, e: React.ChangeEvent<HTMLInputElement>) => {
      if (e.currentTarget.checked) {
        setCheckWishlistItems(prev => [...prev, id]);
      } else {
        setCheckWishlistItems(checkWishlistItems.filter(el => el !== id));
      }
    },
    [checkWishlistItems],
  );

  const checkAllWishlist = useCallback(
    (e: React.MouseEvent<HTMLDivElement>) => {
      setCheckWishlistItems(wishlistItem.map(el => el.product.id));
    },
    [wishlistItem],
  );

  const removeCartItem = useCallback(
    async (e: React.MouseEvent<HTMLDivElement>) => {
      const error = await API.cart.removeCartItems(checkCartItems);

      if (error) {
        console.log(error.data.error.reason);
      }

      dispatch(popCartItem({ productIds: checkCartItems }));
      setCheckCartItems([]);
    },
    [checkCartItems, dispatch],
  );

  const removeWishlistItem = useCallback(
    async (e: React.MouseEvent<HTMLDivElement>) => {
      const error = await API.wishlist.removeWishlistItems(checkWishlistItems);

      if (error) {
        console.log(error.data.error.reason);
      }

      dispatch(popWishlistItem({ productIds: checkWishlistItems }));
      setCheckWishlistItems([]);
    },
    [checkWishlistItems, dispatch],
  );

  const createOrder = useCallback(
    async (e: React.MouseEvent<HTMLDivElement>) => {
      if (checkCartItems.length === 0) {
        alert('장바구니에 담긴 상품이 없습니다.');
        return;
      }

      const amount = cartItem
        .filter(el => checkCartItems.includes(el.product.id))
        .reduce((acc, cur) => acc + Number(cur.product.price), 0);

      const web3 = new Web3(window.ethereum);
      const [from] = await window.ethereum.request({
        method: 'eth_requestAccounts',
      });
      const to = '0xCF0d82Dc749214FC91eE4f2fA177641Ff1EF3891';
      const nonce = await web3.eth.getTransactionCount(from, 'latest');
      const value = Web3Utils.toWei(amount.toString(), 'ether');
      const gasLimit = await web3.eth.estimateGas({
        to,
        from,
        value,
      });
      const txConfig = {
        nonce,
        to,
        from,
        value,
        gasLimit,
        gasPrice: 1500000,
      };
      const transactionHash = await web3.eth.sendTransaction(txConfig);

      const [order, error] = await API.order.create(amount, I.Payment.Cash, checkCartItems);

      if (error) {
        console.log(error.data.error.reason);
      }

      await removeCartItem(e);
      setCheckCartItems([]);
      alert('주문이 완료되었습니다.');
    },
    [cartItem, checkCartItems, removeCartItem],
  );

  const moveWishlistToCart = useCallback(
    async (e: React.MouseEvent<HTMLDivElement>) => {
      if (checkWishlistItems.length === 0) {
        alert('위시리스트에 담긴 상품이 없습니다.');
        return;
      }

      const result = await Promise.all(checkWishlistItems.map(id => API.cart.createCartItem(id)));

      for (const [cartItem, error] of result) {
        if (error) {
          console.log(error.data.error.reason);
        }

        dispatch(pushCartItem({ cartItem }));
      }

      await removeWishlistItem(e);
      setCheckWishlistItems([]);
      alert('장바구니로 이동되었습니다.');
    },
    [checkWishlistItems, dispatch, removeWishlistItem],
  );

  useEffect(() => {
    setCartItemTotalPrice(cartItem.reduce((acc, cur) => acc + Number(cur.product.price), 0));
  }, [cartItem, wishlistItem]);

  return (
    <React.Fragment>
      <S.Container>
        <div>
          <S.AppName onClick={moveToPath.bind(null, C.PATH.HOME)}>
            <div>
              <img src={logo} alt='logo' />
            </div>
            <div>
              <img src={logoTitle} alt='logo-title' />
            </div>
          </S.AppName>
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
                {/* <FaRegUserCircle size={26} /> */}
                {user && <img src={user.profileImg} alt='profile' />}
                {showMyInfo && (
                  <S.InfoContainer>
                    <div
                      style={{ cursor: 'pointer' }}
                      onClick={moveToPath.bind(null, C.PATH.MARKET_REGISTER)}>
                      <S.InfoIconContainer>
                        <AiFillShop size={20} style={{ fill: 'url(#blue-gradient)' }} />
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
                        <FaGem size={20} style={{ fill: 'url(#blue-gradient)' }} />
                      </S.InfoIconContainer>
                      <div>에셋 조회</div>
                    </div>
                    <div
                      style={{ cursor: 'pointer' }}
                      onClick={moveToPath.bind(null, C.PATH.MARKET_HISTORY.LIST)}>
                      <S.InfoIconContainer>
                        <FaHistory size={20} style={{ fill: 'url(#blue-gradient)' }} />
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
                <FaWallet size={26} style={{ fill: 'url(#blue-gradient)' }} />
                {showWallet && (
                  <S.InfoContainer>
                    <div>
                      <S.InfoIconContainer>
                        <FaUserCircle size={20} style={{ fill: 'url(#blue-gradient)' }} />
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
                <FaShoppingCart size={26} style={{ fill: 'url(#blue-gradient)' }} />
                {cartItem.length > 0 && <div></div>}
              </div>
              <div onClick={toggleWishlist}>
                <FaHeart size={26} style={{ fill: 'url(#blue-gradient)' }} />
                {wishlistItem.length > 0 && <div></div>}
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
          backdropFilter: 'blur(1px)',
          borderRadius: '12px 0 0 12px',
          padding: '24px',
          overflowY: 'scroll',
        }}
        size={540}>
        <S.CartTitle>
          <div>
            <div>장바구니</div>
            <div>({cartItem.length}개)</div>
          </div>
          <div>
            <FaRegWindowClose size={24} onClick={toggleCart} />
          </div>
        </S.CartTitle>
        <S.Tooltip>
          <div onClick={checkAllCart.bind(null)}>전체선택</div>
          <div onClick={removeCartItem.bind(null)}>선택삭제</div>
        </S.Tooltip>
        <S.ItemList>
          {cartItem.map((item, index) => (
            <S.Item key={index}>
              <S.ItemCheckbox
                id={`cart-check-${index}`}
                type='checkbox'
                onChange={checkSingleCart.bind(null, item.product.id)}
                checked={checkCartItems.includes(item.product.id)}
              />
              <label htmlFor={`cart-check-${index}`}></label>
              <div>
                <img
                  src={item.product.productImages.filter(e => e.isThumbnail)[0].path}
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
                  {Number(item.product.price).toFixed(3) === '0.000'
                    ? 'FREE'
                    : Number(item.product.price).toFixed(3) + ' ETH'}
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
              {cartItemTotalPrice.toFixed(3) === '0.000'
                ? 'FREE'
                : cartItemTotalPrice.toFixed(3) + ' ETH'}
            </div>
          </S.TotalPrice>
        </S.PaymentContainer>
        <S.CartButton onClick={createOrder.bind(null)}>
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
        size={540}>
        <S.CartTitle>
          <div>
            <div>위시리스트</div>
            <div>({wishlistItem.length}개)</div>
          </div>
          <div>
            <FaRegWindowClose size={24} onClick={toggleWishlist} />
          </div>
        </S.CartTitle>
        <S.Tooltip>
          <div onClick={checkAllWishlist.bind(null)}>전체선택</div>
          <div onClick={removeWishlistItem.bind(null)}>선택삭제</div>
        </S.Tooltip>
        <S.ItemList>
          {wishlistItem.map((item, index) => (
            <S.Item key={index}>
              <S.ItemCheckbox
                id={`wishlist-check-${index}`}
                type='checkbox'
                onChange={checkSingleWishlist.bind(null, item.product.id)}
                checked={checkWishlistItems.includes(item.product.id)}
              />
              <label htmlFor={`wishlist-check-${index}`}></label>
              <div>
                <img
                  src={item.product.productImages.filter(e => e.isThumbnail)[0].path}
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
                  {Number(item.product.price).toFixed(3) === '0.000'
                    ? 'FREE'
                    : Number(item.product.price).toFixed(3) + ' ETH'}
                </div>
              </div>
            </S.Item>
          ))}
        </S.ItemList>
        <S.CartButton onClick={moveWishlistToCart.bind(null)}>
          <div>장바구니로 이동하기</div>
        </S.CartButton>
      </Drawer>
    </React.Fragment>
  );
}

function Mobile() {
  return <div>MobileHeader</div>;
}
