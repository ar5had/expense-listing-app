import styled from 'styled-components'
import { ApolloError } from 'apollo-client'

import { gts } from '../lib/styledComponentsUtils'

interface ErrorMessageProps {
  error: ApolloError | undefined
}

const ErrorStyles = styled.div`
  padding: ${gts('smMargin')}px;
  margin: ${gts('smMargin')}px 0;
  border: 1px solid ${gts('grey')};
  color: ${gts('red')};
  border-radius: 8px;
  p {
    margin: 0;
    line-height: 1.5;
  }
  strong {
    margin-right: 1rem;
    font-weight: bold;
    text-transform: uppercase;
    letter-spacing: 2px;
  }
`

const ErrorMessage: React.FC<ErrorMessageProps> = ({ error }) =>
  !error || !error.message ? null : (
    <ErrorStyles>
      <p>
        <strong>Error:</strong>
        {error.message.replace('GraphQL error: ', '')}
      </p>
    </ErrorStyles>
  )

export default ErrorMessage
