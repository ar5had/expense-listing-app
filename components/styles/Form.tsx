import styled from 'styled-components'

import { gts } from '../../lib/styledComponentsUtils'

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
    }
    button[disabled],
    button[disabled]:hover,
    button[disabled]:focus {
      background: ${gts('greyBackground')};
      color: ${gts('darkGrey')};
      cursor: not-allowed;
      opacity: 1;
    }
  }
`

export default Form
