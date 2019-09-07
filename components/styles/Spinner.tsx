import styled, { keyframes } from 'styled-components'

const loading = keyframes`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
`

const Spinner = styled.span`
  --dim: 1.6rem;
  --primaryColor: rgba(228, 228, 228, 0.7);
  --secondaryColor: rgba(228, 228, 228, 0.15);
  width: var(--dim);
  height: var(--dim);
  display: inline-block;
  border: solid 2px transparent;
  border-color: var(--secondaryColor) var(--primaryColor) var(--primaryColor) var(--secondaryColor);
  border-radius: 50%;
  animation: ${loading} 1s linear infinite;
`

export default Spinner
