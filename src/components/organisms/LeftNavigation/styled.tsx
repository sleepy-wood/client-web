import styled from 'styled-components';

export const Container = styled.div`
  width: 230px;
  height: 100vh;
  max-width: 230px;
  max-height: calc(100vh - 72px);

  padding: 20px;

  z-index: 1001;
  overflow: hidden;

  & > div {
    color: var(--color-text);

    & > p {
      font-size: 20px;
      font-weight: 600;

      padding-bottom: 8px;
    }

    & > ul {
      padding-left: 8px;

      & > li {
        display: flex;
        align-items: center;

        padding-bottom: 12px;
        cursor: pointer;

        & > :nth-of-type(1) {
          margin-right: 8px;
        }
      }
    }
  }
`;
