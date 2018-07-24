import { css } from 'styled-components';

export const media = {
  mobile: (...args) => css`
    @media screen and (max-width: 768px) {
      ${ css(...args) }
    }
  `
}