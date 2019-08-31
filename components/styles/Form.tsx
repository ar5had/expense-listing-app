import styled, { keyframes } from 'styled-components'
import { gts } from '../../lib/getThemeStyle'

const loading = keyframes`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
`

const Form = styled.form`
  fieldset {
    &[disabled] {
      .comment-input,
      .receipt-input {
        pointer-events: none;
      }
    }

    button[type='submit'] {
      height: 52px;
      display: flex;
      align-items: center;
      justify-content: center;
      .spinner {
        --dim: 1.6rem;
        width: var(--dim);
        height: var(--dim);
        display: inline-block;
        border: solid 2px transparent;
        border-color: rgba(228, 228, 228, 0.15) rgba(228, 228, 228, 0.7) rgba(228, 228, 228, 0.7)
          rgba(228, 228, 228, 0.15);
        border-radius: 50%;
        animation: ${loading} 1s linear infinite;
      }
    }
    button[disabled],
    button[disabled]:hover,
    button[disabled]:focus {
      background: ${gts('grey')};
      color: ${gts('darkGrey')};
      cursor: not-allowed;
    }
  }
`

export default Form
