import Link from 'next/link'
import Router from 'next/router'
import Select from 'react-select'
import styled from 'styled-components'
import { gts } from '../lib/getThemeStyle'
import { IndexHeaderProps } from '../types/components'
import HeadingText from './styles/HeadingText'
import { ReactSelectStyles, ReactSelectTheme } from './styles/ReactSelectStyles'

const StyledHeading = styled.h1`
  font-family: ${gts('emFont')};
  font-size: 4rem;
  text-align: center;
  margin: 0;
  line-height: 1.5;
`

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  margin: ${gts('mdMargin')}px 0 ${gts('xlMargin')}px;
  h5 {
    margin-left: auto;
    line-height: 1;
    margin-right: ${gts('xsMargin')}px;
  }
  .selectElem {
    min-width: 100px;
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
      <StyledHeading>
        <Link href="/">
          <a>Expenses</a>
        </Link>
      </StyledHeading>
      <HeadingText>Items per page: </HeadingText>
      <Select
        styles={ReactSelectStyles}
        theme={ReactSelectTheme}
        className="selectElem"
        value={selectedOption}
        onChange={onItemsPerPageChange}
        options={options}
      />
    </Wrapper>
  )
}
export default IndexHeader
