import React from 'react';

import * as S from './styled';

export default function InnerContainer({ children }) {
  return <S.Container>{children}</S.Container>;
}
