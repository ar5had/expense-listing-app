import Router from 'next/router'
import Link from 'next/link'
import styled from 'styled-components'
import { gts } from '../lib/getThemeStyle'
import { IndexHeaderProps } from '../types/components'
import Heading from './styles/Heading'
import ItemsPerPage from './ItemsPerPage'

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  margin: ${gts('mdMargin')}px 0 ${gts('xlMargin')}px;
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

const IndexHeader: React.FC<IndexHeaderProps> = ({ perPage, offset }) => {
  const onItemsPerPageChange = (value: number) => {
    Router.push(`/?offset=${offset}&limit=${value}`)
  }

  return (
    <Wrapper>
      <Link href="/">
        <a>
          <Heading className="heading">Expenses</Heading>
        </a>
      </Link>
      <ItemsPerPage onChange={onItemsPerPageChange} perPage={perPage} />
    </Wrapper>
  )
}
export default IndexHeader
