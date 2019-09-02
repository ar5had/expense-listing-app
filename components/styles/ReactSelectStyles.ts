import { StylesConfig } from 'react-select/src/styles'
import { theme } from './theme'

const ReactSelectStyles: StylesConfig = {
  menu: (provided) => ({ ...provided, boxShadow: theme.simpleBoxShadow, cursor: 'pointer' }),
  control: (provided, { menuIsOpen, isFocused }) => ({
    ...provided,
    border: 'none',
    boxShadow: menuIsOpen || isFocused ? `0 0 0 1px ${theme.black}` : `0 0 0 1px ${theme.darkGrey}`,
    cursor: 'pointer',
    textTransform: 'uppercase',
    letterSpacing: '2px'
  }),
  option: (provided, { isFocused }) => ({
    ...provided,
    cursor: 'pointer',
    background: isFocused ? theme.grey : theme.white,
    color: theme.black,
    textTransform: 'uppercase',
    letterSpacing: '2px',
    padding: '15px 10px',
    margin: '5px 0',
    width: 140,
    fontSize: '1.3rem'
  }),
  indicatorSeparator: (provided, { isFocused, menuIsOpen }) => ({
    ...provided,
    backgroundColor: isFocused || menuIsOpen ? theme.black : theme.darkGrey
  }),
  noOptionsMessage: (provided) => ({
    ...provided,
    textTransform: 'uppercase',
    letterSpacing: '2px',
    fontSize: '1.3rem'
  })
}

const ReactSelectTheme = (defaultTheme: any) => ({
  ...defaultTheme,
  borderRadius: 4,
  borderWidth: 1,
  colors: {
    ...defaultTheme.colors,
    primary50: '#efefef',
    primary25: '#f1f1f1',
    primary: theme.grey,
    neutral20: theme.darkGrey,
    neutral80: theme.black,
    neutral60: theme.black
  }
})

export { ReactSelectStyles, ReactSelectTheme }
