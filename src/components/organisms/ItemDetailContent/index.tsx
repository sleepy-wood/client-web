import React, { useCallback } from 'react';
import { useDispatch } from 'react-redux';
import { useMediaQuery } from 'react-responsive';
import { useLocation, useNavigate } from 'react-router-dom';
import { FaShoppingCart, FaHeart } from 'react-icons/fa';

import * as API from '../../../apis';
import * as C from '../../../constants';
import * as I from '../../../interfaces';
import * as S from './styled';
import * as U from '../../../utils';
import wood from '../../../assets/images/wood.png';
import { MEDIA } from '../../../constants';
import { pushCartItem } from '../../../reducers/cart.reducer';
import { pushWishlistItem } from '../../../reducers/wishlist.reducer';

const { minWidth } = MEDIA;

type Props = {
  product: I.Product;
  extraProducts: I.Product[];
  recommendProducts: I.Product[];
};

export default function ItemDetailContent({ product, extraProducts, recommendProducts }: Props) {
  const isDesktop = useMediaQuery({ minWidth });

  return isDesktop ? (
    <Desktop
      product={product}
      extraProducts={extraProducts}
      recommendProducts={recommendProducts}
    />
  ) : (
    <Mobile />
  );
}

function Desktop({ product, extraProducts, recommendProducts }: Props) {
  const dispatch = useDispatch();
  const location = useLocation();
  const navigate = useNavigate();

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

  const addWishlistItem = useCallback(
    async (productId: number, e: React.MouseEvent) => {
      const [wishlistItem, error] = await API.wishlist.createWishlistItem(productId);

      if (error) {
        console.log(error.data.error.reason);
      }

      dispatch(pushWishlistItem({ wishlistItem }));
    },
    [dispatch],
  );

  const addCartItem = useCallback(
    async (productId: number, e: React.MouseEvent) => {
      const [cartItem, error] = await API.cart.createCartItem(productId);

      if (error) {
        console.log(error.data.error.reason);
      }

      dispatch(pushCartItem({ cartItem }));
    },
    [dispatch],
  );

  const createOrder = useCallback(
    async (amount: number, productId: number, e: React.MouseEvent<HTMLDivElement>) => {
      const [order, error] = await API.order.create(amount, I.Payment.Cash, [productId]);

      if (error) {
        console.log(error.data.error.reason);
      }

      alert('주문이 완료되었습니다.');
    },
    [],
  );

  return (
    <S.Container>
      {product && (
        <S.AssetContainer>
          {product.category === I.ProductCategory.collection ? (
            <React.Fragment>
              <S.AssetVideo>
                <video
                  controls={false}
                  muted={true}
                  autoPlay={true}
                  loop={true}
                  src={
                    product.productImages.filter(e => e.mimeType.includes('video'))[0].path
                  }></video>
              </S.AssetVideo>
              <S.AssetInfo>
                <S.AssetName>{product.name}</S.AssetName>
                <S.AssetSeller>
                  <div>
                    <img src={product.user.profileImg} alt='profile' />
                  </div>
                  <div>
                    <div>크리에이터</div>
                    <div>{product.user.nickname}</div>
                  </div>
                  <div>
                    <div>지갑 주소</div>
                    <div>0x1A3f94C45e28c1882D8672a98e87065223a2c380</div>
                  </div>
                </S.AssetSeller>
                <div>
                  <S.AssetCurrentPrice>CURRENT PRICE</S.AssetCurrentPrice>
                  <S.AssetPrice>
                    <div>
                      <img src={wood} alt='wood' />
                    </div>
                    <div>
                      <div>
                        {Number(product.price).toFixed(2) === '0.00'
                          ? 'FREE'
                          : Number(product.price).toFixed(2) + ' ETH'}
                      </div>
                      <div>{U.convertETHtoUSD(Number(product.price)).toFixed(2) + ' USD'}</div>
                    </div>
                  </S.AssetPrice>
                  <S.AssetButtonContainer>
                    <div onClick={createOrder.bind(null, Number(product.price), product.id)}>
                      지금구매
                    </div>
                    <div onClick={addCartItem.bind(null, product.id)}>
                      <FaShoppingCart size={20} />
                    </div>
                    <div onClick={addWishlistItem.bind(null, product.id)}>
                      <FaHeart size={20} />
                    </div>
                  </S.AssetButtonContainer>
                </div>
                <S.AssetDescription
                  dangerouslySetInnerHTML={{ __html: product ? product.detail : '' }}
                />
              </S.AssetInfo>
            </React.Fragment>
          ) : (
            <React.Fragment>
              <S.AssetImg>
                <img src={product.productImages.filter(e => e.isThumbnail)[0].path} alt='asset' />
              </S.AssetImg>
              <S.AssetInfo>
                <S.AssetName>{product.name}</S.AssetName>
                <S.AssetSeller>
                  <div>
                    <img src={product.user.profileImg} alt='profile' />
                  </div>
                  <div>
                    <div>크리에이터</div>
                    <div>{product.user.nickname}</div>
                  </div>
                  <div>
                    <div>지갑 주소</div>
                    <div>0x1A3f94C45e28c1882D8672a98e87065223a2c380</div>
                  </div>
                </S.AssetSeller>
                <div>
                  <S.AssetCurrentPrice>CURRENT PRICE</S.AssetCurrentPrice>
                  <S.AssetPrice>
                    <div>
                      <img src={wood} alt='wood' />
                    </div>
                    <div>
                      <div>
                        {Number(product.price).toFixed(2) === '0.00'
                          ? 'FREE'
                          : Number(product.price).toFixed(2) + ' ETH'}
                      </div>
                      <div>{U.convertETHtoUSD(Number(product.price)).toFixed(2) + ' USD'}</div>
                    </div>
                  </S.AssetPrice>
                  <S.AssetButtonContainer>
                    <div onClick={createOrder.bind(null, Number(product.price), product.id)}>
                      지금구매
                    </div>
                    <div onClick={addCartItem.bind(null, product.id)}>
                      <FaShoppingCart size={20} />
                    </div>
                    <div onClick={addWishlistItem.bind(null, product.id)}>
                      <FaHeart size={20} />
                    </div>
                  </S.AssetButtonContainer>
                </div>
              </S.AssetInfo>
            </React.Fragment>
          )}
        </S.AssetContainer>
      )}
      <S.BottomContainer>
        {product && product.category !== I.ProductCategory.collection && (
          <S.AssetDescription dangerouslySetInnerHTML={{ __html: product ? product.detail : '' }} />
        )}
        <S.SemiTitle>이 크리에이터의 에셋 더 알아보기</S.SemiTitle>
        <S.ExtraAssets>
          {extraProducts &&
            extraProducts.length > 0 &&
            extraProducts.map(
              (extraProduct, index) =>
                extraProduct.category !== I.ProductCategory.collection && (
                  <S.ExtraAsset
                    key={index}
                    onClick={moveToPath.bind(
                      null,
                      C.PATH.ITEM_DETAIL.PATH.replace(':id', extraProduct.id.toString()),
                    )}>
                    <S.ExtraAssetImg>
                      <img
                        src={extraProduct.productImages.filter(e => e.isThumbnail)[0].path}
                        alt='tree'
                      />
                    </S.ExtraAssetImg>
                    <S.ExtraAssetName>{extraProduct.name}</S.ExtraAssetName>
                    <S.ExtraAssetCount>1 / 1</S.ExtraAssetCount>
                    <S.ExtraAssetPrice>
                      <div>
                        <img src={wood} alt='wood' />
                      </div>
                      <div>
                        <div>
                          {Number(extraProduct.price).toFixed(2) === '0.00'
                            ? 'FREE'
                            : Number(extraProduct.price).toFixed(2) + ' ETH'}
                        </div>
                        <div>{U.convertETHtoUSD(Number(product.price)).toFixed(2) + ' USD'}</div>
                      </div>
                    </S.ExtraAssetPrice>
                  </S.ExtraAsset>
                ),
            )}
        </S.ExtraAssets>
        <S.SemiTitle>추천 상품</S.SemiTitle>
        {recommendProducts && recommendProducts.length > 0 && (
          <S.RecommendAssets
            style={{
              gridTemplateColumns: `repeat(auto-fill, ${
                recommendProducts[0].category === I.ProductCategory.collection ? '240px' : '200px'
              })`,
            }}>
            {recommendProducts.map((recommendProduct, index) =>
              recommendProduct.category === I.ProductCategory.collection ? (
                <S.RecommendAsset
                  key={index}
                  onClick={moveToPath.bind(
                    null,
                    C.PATH.ITEM_DETAIL.PATH.replace(':id', recommendProduct.id.toString()),
                  )}>
                  <S.RecommendAssetImg>
                    <img
                      src={recommendProduct.productImages.filter(e => e.isThumbnail)[0].path}
                      alt='tree'
                    />
                  </S.RecommendAssetImg>
                  <S.RecommendAssetName>{recommendProduct.name}</S.RecommendAssetName>
                  <S.RecommendAssetCount>1 / 1</S.RecommendAssetCount>
                  <S.RecommendAssetPrice>
                    <div>
                      <img src={wood} alt='wood' />
                    </div>
                    <div>
                      <div>
                        {Number(recommendProduct.price).toFixed(2) === '0.00'
                          ? 'FREE'
                          : Number(recommendProduct.price).toFixed(2) + ' ETH'}
                      </div>
                      <div>{U.convertETHtoUSD(Number(product.price)).toFixed(2) + ' USD'}</div>
                    </div>
                  </S.RecommendAssetPrice>
                </S.RecommendAsset>
              ) : (
                <S.ExtraAsset
                  key={index}
                  onClick={moveToPath.bind(
                    null,
                    C.PATH.ITEM_DETAIL.PATH.replace(':id', recommendProduct.id.toString()),
                  )}>
                  <S.ExtraAssetImg>
                    <img
                      src={recommendProduct.productImages.filter(e => e.isThumbnail)[0].path}
                      alt='tree'
                    />
                  </S.ExtraAssetImg>
                  <S.ExtraAssetName>{recommendProduct.name}</S.ExtraAssetName>
                  <S.ExtraAssetCount>1 / 1</S.ExtraAssetCount>
                  <S.ExtraAssetPrice>
                    <div>
                      <img src={wood} alt='wood' />
                    </div>
                    <div>
                      <div>
                        {Number(recommendProduct.price).toFixed(2) === '0.00'
                          ? 'FREE'
                          : Number(recommendProduct.price).toFixed(2) + ' ETH'}
                      </div>
                      <div>{U.convertETHtoUSD(Number(product.price)).toFixed(2) + ' USD'}</div>
                    </div>
                  </S.ExtraAssetPrice>
                </S.ExtraAsset>
              ),
            )}
          </S.RecommendAssets>
        )}
      </S.BottomContainer>
    </S.Container>
  );
}

function Mobile() {
  return <div>Mobile</div>;
}
