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
    --color-palette6: ${({ colorTheme }) => COLORS[colorTheme].palette6};
    --color-palette7: ${({ colorTheme }) => COLORS[colorTheme].palette7};
    --color-palette8: ${({ colorTheme }) => COLORS[colorTheme].palette8};
    --color-palette9: ${({ colorTheme }) => COLORS[colorTheme].palette9};
    --color-palette10: ${({ colorTheme }) => COLORS[colorTheme].palette10};
    --size-extra-small: ${SIZES.extraSmall};
    --size-small: ${SIZES.small};
    --size-medium: ${SIZES.medium};
    --size-large: ${SIZES.large};
    --size-extra-large: ${SIZES.extraLarge};
  }
`;
