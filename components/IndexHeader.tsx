import Link from 'next/link'
import Router from 'next/router'
import styled from 'styled-components'
import { gts } from '../lib/getThemeStyle'
import { IndexHeaderProps } from '../types/components'
import HeadingText from './styles/HeadingText'
import Heading from './styles/Heading'
import Dropdown from './Dropdown'

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  margin: ${gts('mdMargin')}px 0 ${gts('xlMargin')}px;
  .per-page-select-label {
    line-height: 1;
    margin: 0 ${gts('xsMargin')}px 0 auto;
  }
  .selectElem .react-select__control {
    width: 140px;
  }
`

const IndexHeader: React.FC<IndexHeaderProps> = ({ perPage, offset }) => {
  const onItemsPerPageChange = (option: any) => {
    Router.push(`/?offset=${offset}&limit=${option.value}`)
  }

  const options = [
    {
      value: 10,
      label: '10'
    },
    {
      value: 25,
      label: '25'
    },
    {
      value: 50,
      label: '50'
    },
    {
      value: 100,
      label: '100'
    }
  ]

  let selectedOption = options.find((e) => e.value === perPage)

  if (!selectedOption) {
    selectedOption = { value: perPage, label: `${perPage}` }
    options.push(selectedOption)
  }

  return (
    <Wrapper>
      <Heading>
        <Link href="/">
          <a>Expenses</a>
        </Link>
      </Heading>
      <HeadingText className="per-page-select-label">Items per page: </HeadingText>
      <Dropdown
        className="selectElem"
        value={selectedOption}
        onChange={onItemsPerPageChange}
        options={options}
      />
    </Wrapper>
  )
}
export default IndexHeader
