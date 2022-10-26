import React from 'react';
import { useMediaQuery } from 'react-responsive';

import * as S from './styled';
import category from '../../../assets/images/category.webp';
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
            <div>서비스</div>
            <div>주요기능</div>
            <div>다운로드</div>
          </div>
          <div>
            <div>지원</div>
            <div>가이드</div>
            <div>고객센터</div>
          </div>
        </div>
        <div>
          <div>(주)빌드업</div>
          <div>대표이사 : 박인영</div>
          <div>사업자등록번호 : 206-86-20608</div>
          <div>통신판매업신고번호 : 제2009-서울-ㅌㅌㅌㅌ호</div>
          <div>주소 : 서울특별시 영등포구 경인로 112길 7 308호</div>
          <div>문의처 : 010-2717-2868, dlsdudg15@naver.com</div>
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
