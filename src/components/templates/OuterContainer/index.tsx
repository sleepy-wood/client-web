import React from 'react';

import * as S from './styled';
import Header from '../../organisms/Header';

type Props = {
  setAccount: (account: string) => void;
  children: React.ReactNode;
};

export default function OuterContainer({ setAccount, children }: Props) {
  return (
    <S.Container>
      <Header setAccount={setAccount} />
      {children}
    </S.Container>
  );
}
