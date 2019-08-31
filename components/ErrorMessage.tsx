import styled from 'styled-components'
import { ErrorMessageProps } from '../types/components'
import { gts } from '../lib/getThemeStyle'

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

const ErrorMessage: React.FC<ErrorMessageProps> = ({ error }) => {
  if (!error || !error.message) return null
  if (error.networkError && error.networkError.result && error.networkError.result.errors.length) {
    return error.networkError.result.errors.map((error: any, i: number) => (
      <ErrorStyles key={i}>
        <p>
          <strong>Error:</strong>
          {error.message.replace('GraphQL error: ', '')}
        </p>
      </ErrorStyles>
    ))
  }
  return (
    <ErrorStyles>
      <p>
        <strong>Error:</strong>
        {error.message.replace('GraphQL error: ', '')}
      </p>
    </ErrorStyles>
  )
}

export default ErrorMessage
