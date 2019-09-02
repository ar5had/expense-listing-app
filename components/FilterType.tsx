import Dropdown from './Dropdown'
import styled from 'styled-components'
import { FilterTypeProps, FilterOption } from '../types/components'

const FilterDropdown = styled.div`
  .react-select__container {
    & > * {
      color: white;
    }
  }
  .react-select__control {
    background: transparent;
    width: 140px;
    box-shadow: none;
  }

  position: absolute;
  right: 0;
  top: 0;
`

const FilterValues: React.FC<FilterTypeProps> = ({ filterType, changeFilterType }) => {
  const filterOptions: FilterOption[] = [
    { value: 'name', label: 'Name' },
    { value: 'comment', label: 'Comment' },
    { value: 'merchant', label: 'Merchant' }
  ]

  const selectedOption =
    filterOptions.filter((option) => option.value === filterType) || filterOptions[0]

  const onChange = (option: FilterOption) => changeFilterType(option.value)

  return (
    <FilterDropdown>
      <Dropdown options={filterOptions} value={selectedOption} width="150px" onChange={onChange} />
    </FilterDropdown>
  )
}

export default FilterValues
