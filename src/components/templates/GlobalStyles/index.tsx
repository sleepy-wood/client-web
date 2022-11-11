import { COLORS, SIZES } from '../../../constants';

import { createGlobalStyle } from 'styled-components';

export const GlobalStyles = createGlobalStyle<{ colorTheme: 'light' | 'dark' }>`
  html {
    --color-text: ${({ colorTheme }) => COLORS[colorTheme].text};
    --color-palette1: ${({ colorTheme }) => COLORS[colorTheme].palette1};
    --color-palette2: ${({ colorTheme }) => COLORS[colorTheme].palette2};
    --color-palette3: ${({ colorTheme }) => COLORS[colorTheme].palette3};
    --color-palette4: ${({ colorTheme }) => COLORS[colorTheme].palette4};
    --color-palette5: ${({ colorTheme }) => COLORS[colorTheme].palette5};
    --size-extra-small: ${SIZES.extraSmall};
    --size-small: ${SIZES.small};
    --size-medium: ${SIZES.medium};
    --size-large: ${SIZES.large};
    --size-extra-large: ${SIZES.extraLarge};
  }
`;
