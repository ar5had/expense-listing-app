import styled from 'styled-components'
import { ExpenseFilterProps } from '../types/components'
import Input from './styles/Input'
import { gts } from '../lib/getThemeStyle'
import { useState, useEffect } from 'react'
import { getTypewriterStrings } from '../lib/filterUtils'

const StyledFilter = styled.div`
  margin-bottom: ${gts('xlMargin')}px;
  position: relative;
  input {
    width: 100%;
    padding: 10px calc(2rem + 20px) 10px 5px;
    transition: 0.2s;
    line-height: 1;
    text-transform: uppercase;
    letter-spacing: 2px;
  }
  input:focus + .search-icon {
    opacity: 1;
  }
  .search-icon {
    position: absolute;
    bottom: 10px;
    right: 10px;
    --dim: 2rem;
    display: block;
    opacity: 0.2;
    transiton: 0.2s;
    width: var(--dim);
    height: var(--dim);
    background-image: url('/static/images/search.svg');
    background-repeat: no-repeat;
    cursor: text;
  }
  @media (max-width: ${gts('mobileScreenRes')}) {
    margin-bottom: ${gts('mdMargin')}px;
  }
`

const ExpenseFilter: React.FC<ExpenseFilterProps> = ({ filterText, changeFilterText }) => {
  const [counter, changeCounter] = useState(0)
  const placeholderStrings = getTypewriterStrings(['name', 'comment', 'merchant'])

  useEffect(() => {
    let timeoutId: undefined | number

    if (!filterText) {
      timeoutId = setTimeout(() => {
        changeCounter((counter + 1) % (placeholderStrings.length - 1))
      }, 250)
    } else {
      clearInterval(timeoutId)
    }

    return () => clearTimeout(timeoutId)
  }, [counter, filterText])

  return (
    <StyledFilter>
      <Input
        placeholder={`Search expense by ${placeholderStrings[counter]}_`}
        id="filter"
        value={filterText}
        onChange={({ currentTarget: { value } }) => changeFilterText(value)}
        autoComplete="off"
      />
      <label htmlFor="filter" className="search-icon" />
    </StyledFilter>
  )
}
export default ExpenseFilter
