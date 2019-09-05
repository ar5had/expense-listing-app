import styled from 'styled-components'
import { gts } from '../lib/getThemeStyle'
import { Link, useTranslation } from '../lib/i18n'

const StyledButton = styled.button`
  background: none;
  border: none;
  letter-spacing: 2px;
  text-transform: uppercase;
  span {
    line-height: 2rem;
    margin-left: 5px;
  }
  span,
  svg {
    vertical-align: middle;
  }
  svg {
    fill: ${gts('black')};
    height: 24px;
    width: 24px;
  }
  &:hover {
    cursor: pointer;
  }
`

const BackToHome: React.FC = () => {
  const { t } = useTranslation()

  return (
    <Link href="/">
      <StyledButton type="button">
        <svg>
          <path d="M15.41,16.59L10.83,12l4.58-4.59L14,6l-6,6l6,6L15.41,16.59z"></path>
          <path fill="none" d="M0,0h24v24H0V0z"></path>
        </svg>
        <span>{t('common:back-to-home')}</span>
      </StyledButton>
    </Link>
  )
}

export default BackToHome
