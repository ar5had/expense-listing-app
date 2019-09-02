import styled from 'styled-components'
import { FilterExpenseProps } from '../types/components'
import FilterType from './FilterType'
import Input from './styles/Input'
import { gts } from '../lib/getThemeStyle'

const StyledFilter = styled.div`
  margin-bottom: ${gts('lgMargin')}px;
  position: relative;
  input {
    width: 100%;
    padding: 10px 150px 10px 5px;
    transition: 0.2s;
    line-height: 1;
    text-transform: uppercase;
    letter-spacing: 2px;
  }
`

const FilterExpense: React.FC<FilterExpenseProps> = ({
  filterText,
  changeFilterText,
  filterType,
  changeFilterType
}) => {
  return (
    <StyledFilter>
      <Input
        placeholder="Filter expense..."
        value={filterText}
        onChange={({ currentTarget: { value } }) => changeFilterText(value)}
      />
      <FilterType filterType={filterType} changeFilterType={changeFilterType} />
    </StyledFilter>
  )
}

export default FilterExpense
