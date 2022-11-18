import React, { useCallback } from 'react';
import { useMediaQuery } from 'react-responsive';
import { useLocation, useNavigate } from 'react-router-dom';

import * as C from '../../../constants';
import * as I from '../../../interfaces';
import * as S from './styled';
import { MEDIA } from '../../../constants';
import errorImg from '../../../assets/images/cate_plants.webp';

const { minWidth } = MEDIA;

type Props = {
  history: I.Order;
};

export default function MarketHistoryDetailContent({ history }: Props) {
  const isDesktop = useMediaQuery({ minWidth });

  return isDesktop ? <Desktop history={history} /> : <Mobile />;
}

function Desktop({ history }: Props) {
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

  return (
    <S.Container>
      <S.Header>
        <h1>주문 내역 상세조회</h1>
      </S.Header>
      <S.ItemContainer>
        {history &&
          history.orderDetails.map((orderDetail, index) => (
            <S.Item>
              <S.ItemImg>
                <img
                  src={
                    orderDetail.product.category === I.ProductCategory.collection
                      ? orderDetail.product.productImages[1].path
                      : orderDetail.product.productImages[
                          orderDetail.product.productImages.length - 1
                        ].path
                  }
                  style={{
                    objectFit:
                      orderDetail.product.category === I.ProductCategory.collection
                        ? 'cover'
                        : 'contain',
                    objectPosition:
                      orderDetail.product.category === I.ProductCategory.collection
                        ? '0 -68px'
                        : 'unset',
                  }}
                  alt={`${orderDetail.product.name}'s represent image`}
                  onError={(e: React.SyntheticEvent<HTMLImageElement, Event>) => {
                    e.currentTarget.src = errorImg;
                  }}
                />
              </S.ItemImg>
              <S.ItemInfoContainer>
                <S.ItemTitle
                  onClick={moveToPath.bind(
                    null,
                    C.PATH.ITEM_DETAIL.PATH.replace(':id', orderDetail.product.id.toString()),
                  )}>
                  {orderDetail.product.name}
                </S.ItemTitle>
                <S.ItemInfo>
                  <div>
                    <div>
                      <div>
                        {Number(orderDetail.product.price).toFixed(2) === '0.00'
                          ? 'FREE'
                          : Number(orderDetail.product.price).toFixed(2) + ' ETH'}
                      </div>
                      <div>
                        <div>
                          {new Date(history.createdAt).getFullYear()}.
                          {new Date(history.createdAt).getMonth() + 1}.
                          {new Date(history.createdAt).getDate() < 10
                            ? '0'
                            : '' + new Date(history.createdAt).getDate()}
                        </div>
                      </div>
                    </div>
                    <div>결제완료</div>
                  </div>
                  <S.ItemSeller>
                    <div>
                      <img src={orderDetail.product.user.profileImg} alt='seller profile' />
                    </div>
                    <div>{orderDetail.product.user.nickname}</div>
                  </S.ItemSeller>
                </S.ItemInfo>
              </S.ItemInfoContainer>
            </S.Item>
          ))}
      </S.ItemContainer>
      <S.PaymentContainer>
        <S.PaymentTitle>결제 금액</S.PaymentTitle>
        <S.TotalPrice>
          <div>합계</div>
          {history && (
            <div>
              {Number(history.amount).toFixed(2) === '0.00'
                ? 'FREE'
                : Number(history.amount).toFixed(2) + ' ETH'}
            </div>
          )}
        </S.TotalPrice>
      </S.PaymentContainer>
    </S.Container>
  );
}

function Mobile() {
  return <div>Mobile</div>;
}
