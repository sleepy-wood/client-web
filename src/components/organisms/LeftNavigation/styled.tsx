import styled from 'styled-components';

export const Container = styled.div`
  width: 230px;
  padding: 20px;

  position: fixed;
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

export const Li = styled.li<{ active?: boolean }>`
  color: ${props => (props.active ? 'var(--color-palette4)' : 'var(--color-text)')};
  opacity: ${props => (props.active ? '1' : '0.5')};
`;
