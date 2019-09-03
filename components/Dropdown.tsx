import Select from 'react-select'
import { ReactSelectStyles, ReactSelectTheme } from './styles/ReactSelectStyles'
import { SelectComponentsProps } from 'react-select/src/Select'
import styled from 'styled-components'
import { gts } from '../lib/getThemeStyle'

// NOTE: style props approach is preferred over targetting styles using css-classnames, that's why
// all the styling is done using styles props except few styles that can't be set by styles props.
// So in order to sync the react-select styles with our theme, we need to use className-prefix css
const DropdownStyles = styled.div`
  .react-select__single-value {
    color: ${gts('darkGrey')};
  }

  .react-select__control--is-focused {
    .react-select__single-value {
      color: ${gts('black')} !important;
    }
  }
`

const Dropdown: React.FC<SelectComponentsProps> = (props) => (
  <DropdownStyles>
    <Select
      styles={ReactSelectStyles}
      classNamePrefix="react-select"
      theme={ReactSelectTheme}
      isSearchable={false}
      {...props}
    />
  </DropdownStyles>
)

export default Dropdown
