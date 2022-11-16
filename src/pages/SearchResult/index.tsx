import React from 'react';
import { useSearchParams } from 'react-router-dom';

import * as S from './styled';

export default function SearchResult() {
  const [searchParams, setSearchParams] = useSearchParams();

  console.log(searchParams.get('query'));

  return <S.Container>SearchResult</S.Container>;
}
