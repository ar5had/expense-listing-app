import styled from 'styled-components'
import { ExpenseFilterProps } from '../types/components'
import Input from './styles/Input'
import { gts } from '../lib/getThemeStyle'

const StyledFilter = styled.div`
  margin-bottom: ${gts('xlMargin')}px;
  position: relative;
  input {
    width: 100%;
    padding: 10px 5px;
    transition: 0.2s;
    line-height: 1;
    text-transform: uppercase;
    letter-spacing: 2px;
  }
  @media (max-width: ${gts('mobileScreenRes')}) {
    margin-bottom: ${gts('mdMargin')}px;
  }
`

const ExpenseFilter: React.FC<ExpenseFilterProps> = ({ filterText, changeFilterText }) => {
  return (
    <StyledFilter>
      <Input
        placeholder="Filter expense..."
        value={filterText}
        onChange={({ currentTarget: { value } }) => changeFilterText(value)}
      />
    </StyledFilter>
  )
}

export default ExpenseFilter
