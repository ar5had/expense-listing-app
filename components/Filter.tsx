import { useState } from 'react'
import styled from 'styled-components'
import { FilterProps } from './types'
import FilterValues from './FilterValues'
import FilterButton from './FilterButton'
import { gts } from '../lib/getThemeStyle'

const StyledFilter = styled.div`
  margin-bottom: ${gts('lgMargin')}px;
`
const StyledInput = styled.input`
  width: 100%;
  padding: 1.3rem 1.3rem;
  border: solid 1px ${gts('grey')};
  transition: 0.3s;
  line-height: 1;
  border-radius: ${gts('borderRadius')};
  margin-bottom: ${gts('xsMargin')}px;
  &:focus {
    outline: none;
    border-color: ${gts('black')};
  }
  &::placeholder {
    color: ${gts('darkGrey')};
    opacity: 1;
  }
`

const Filter: React.FC<FilterProps> = () => {
  const [text, changeText] = useState('')
  return (
    <StyledFilter>
      <StyledInput
        placeholder="Search expense..."
        value={text}
        onChange={({ currentTarget: { value } }) => changeText(value)}
      />
      {/* <FilterButton />
      <FilterValues open={true} /> */}
    </StyledFilter>
  )
}

export default Filter
