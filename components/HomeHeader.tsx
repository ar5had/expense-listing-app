import Link from 'next/link'
import Router from 'next/router'
import styled from 'styled-components'

import ItemsPerPage from './ItemsPerPage'
import Heading from './styles/Heading'
import { gts } from '../lib/getThemeStyle'
import { useTranslation } from '../lib/i18n'

interface HomeHeaderProps {
  perPage: number
  offset: number
}

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  margin: 0 0 ${gts('xlMargin')}px;
  .heading {
    line-height: 1;
  }
  @media (max-width: ${gts('mobileScreenRes')}) {
    margin: ${gts('smMargin')}px 0 ${gts('mdMargin')}px;
    .heading {
      text-align: center;
    }
  }
`

const HomeHeader: React.FC<HomeHeaderProps> = ({ perPage, offset }) => {
  const { t } = useTranslation()
  const onItemsPerPageChange = (value: number) => {
    Router.push(`/?offset=${offset}&limit=${value}`)
  }

  return (
    <Wrapper>
      <Link href="/">
        <a>
          <Heading className="heading">{t('home:heading')}</Heading>
        </a>
      </Link>
      <ItemsPerPage onChange={onItemsPerPageChange} perPage={perPage} />
    </Wrapper>
  )
}

export default HomeHeader
