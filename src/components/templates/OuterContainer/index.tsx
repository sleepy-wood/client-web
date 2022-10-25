import React from 'react';

import * as S from './styled';

export default function OuterContainer({ children }) {
  return <S.Container>{children}</S.Container>;
}
