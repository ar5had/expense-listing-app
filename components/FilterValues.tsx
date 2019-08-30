import { useState } from 'react'
import styled from 'styled-components'
import FilterListItem from './FilterListItem'
import { FilterValuesProps } from './types'
import { gts } from '../lib/getThemeStyle'

const StyledFilterValues = styled.ul`
  padding: 0;
  list-style: none;
  color: ${gts('darkGrey')};
  transition: 0.3s;
`

const StyledParagraph = styled.p`
  color: ${gts('darkGrey')};
  text-transform: uppercase;
  font-size: 1.3rem;
  margin: ${gts('xsMargin')}px 0;
  font-weight: bold;
`

const FilterValues: React.FC<FilterValuesProps> = ({ open }) => {
  const [selectedFilterIndex, changeSelectedFilterIndex] = useState(0)

  const filterStrings = [
    { value: 'first', textVal: 'First Name' },
    { value: 'last', textVal: 'Last Name' },
    { value: 'email', textVal: 'Email' },
    { value: 'comment', textVal: 'Comment' },
    { value: 'merchant', textVal: 'Merchant' }
  ]
  const getAllFilterLists = filterStrings.map(({ value, textVal }, index) => (
    <FilterListItem
      key={index}
      value={value}
      isActive={selectedFilterIndex === index}
      textVal={textVal}
      onClick={() => changeSelectedFilterIndex(index)}
    />
  ))

  return (
    <>
      <StyledParagraph>Filter by:</StyledParagraph>
      <StyledFilterValues>{getAllFilterLists}</StyledFilterValues>
    </>
  )
}

export default FilterValues
