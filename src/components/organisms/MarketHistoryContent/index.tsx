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
  history: I.Order[][];
};

export default function MarketHistoryContent({ history }: Props) {
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
        <h1>주문 내역</h1>
      </S.Header>
      {history &&
        history.map(
          (orders, index) =>
            orders.length > 0 && (
              <React.Fragment key={index}>
                <S.MonthLine>
                  <h4>
                    {new Date(orders[0].createdAt).getFullYear()}.
                    {new Date(orders[0].createdAt).getMonth() + 1}
                  </h4>
                </S.MonthLine>
                <S.ItemContainer>
                  {orders.map((order, _index) => (
                    <S.Item key={_index}>
                      <S.ItemImg>
                        <img
                          src={
                            order.orderDetails[0].product.productImages.filter(
                              e => e.isThumbnail,
                            )[0].path
                          }
                          style={{
                            objectFit:
                              order.orderDetails[0].product.category ===
                              I.ProductCategory.collection
                                ? 'cover'
                                : 'contain',
                            objectPosition:
                              order.orderDetails[0].product.category ===
                              I.ProductCategory.collection
                                ? '0 -68px'
                                : 'unset',
                          }}
                          alt={`${order.orderDetails[0].product.name}'s represent image`}
                          onError={(e: React.SyntheticEvent<HTMLImageElement, Event>) => {
                            e.currentTarget.src = errorImg;
                          }}
                        />
                      </S.ItemImg>
                      <S.ItemInfoContainer>
                        <S.ItemTitle
                          onClick={moveToPath.bind(
                            null,
                            C.PATH.MARKET_HISTORY.DETAIL.replace(':id', order.id.toString()),
                          )}>
                          {order.orderDetails[0].product.name}
                          {order.orderDetails.length > 1
                            ? ` 외 ${order.orderDetails.length}건`
                            : ''}
                        </S.ItemTitle>
                        <S.ItemInfo>
                          <div>
                            <div>
                              <div>
                                {Number(order.amount).toFixed(2) === '0.00'
                                  ? 'FREE'
                                  : Number(order.amount).toFixed(2) + ' ETH'}
                              </div>
                              <div>
                                <div>
                                  {new Date(order.createdAt).getFullYear()}.
                                  {new Date(order.createdAt).getMonth() + 1}.
                                  {new Date(order.createdAt).getDate() < 10
                                    ? '0'
                                    : '' + new Date(order.createdAt).getDate()}
                                </div>
                              </div>
                            </div>
                            <div>결제완료</div>
                          </div>
                          <S.ItemSeller>
                            <div>
                              <img
                                src={order.orderDetails[0].product.user.profileImg}
                                alt='seller profile'
                              />
                            </div>
                            <div>{order.orderDetails[0].product.user.nickname}</div>
                          </S.ItemSeller>
                        </S.ItemInfo>
                      </S.ItemInfoContainer>
                    </S.Item>
                  ))}
                </S.ItemContainer>
              </React.Fragment>
            ),
        )}
    </S.Container>
  );
}

function Mobile() {
  return <div>Mobile</div>;
}
