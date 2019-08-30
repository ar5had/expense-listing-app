import styled from 'styled-components'
import { FilterButtonProps } from './types'

const StyledFilterButton = styled.button``

const FilterButton: React.FC<FilterButtonProps> = () => {
  return <StyledFilterButton>Filter</StyledFilterButton>
}

export default FilterButton
