import Link from 'next/link'
import Router from 'next/router'
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
    flex: 1;
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
      <Heading className="heading">
        <Link href="/">
          <a>Expenses</a>
        </Link>
      </Heading>
      <ItemsPerPage onChange={onItemsPerPageChange} perPage={perPage} />
    </Wrapper>
  )
}
export default IndexHeader
