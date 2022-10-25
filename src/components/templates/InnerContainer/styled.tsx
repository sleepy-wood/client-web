import styled from 'styled-components';

import { SIZES } from '../../../constants';

export const DesktopContainer = styled.div`
  width: 100%;
  max-width: 1440px;
  margin: 0 auto;
  padding: 0 ${SIZES.gutterDesktop};
`;

export const MobileContainer = styled.div`
  width: 100%;
  padding: 0 ${SIZES.gutterMobile};
`;
