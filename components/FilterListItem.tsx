import styled from 'styled-components'
import { FilterListProps } from './types'

const StyledFilterList =
  styled.li <
  { isActive: boolean } >
  `
  transition: 0.3s;
  padding: 1rem 0;
  color: ${(props) => (props.isActive ? props.theme.black : props.theme.darkGrey)};
  &:hover {
    cursor: pointer;
  }
`

const FilterListItem: React.FC<FilterListProps> = ({ textVal, value, isActive, onClick }) => {
  return (
    <StyledFilterList onClick={onClick} value={value} isActive={isActive}>
      {textVal}
    </StyledFilterList>
  )
}

export default FilterListItem
