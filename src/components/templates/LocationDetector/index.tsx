import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';

import * as H from '../../../hooks';
import { setCurrentPathname } from '../../../reducers/path.reducer';

export default function LocationDetector() {
  const dispatch = useDispatch();
  const usePathname = H.usePathname();

  useEffect(() => {
    dispatch(
      setCurrentPathname({
        currentPathname: usePathname,
      }),
    );
  }, [dispatch, usePathname]);

  return <></>;
}
