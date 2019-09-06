import styled from 'styled-components'

import HeadingText from './styles/HeadingText'
import Dropdown from './Dropdown'
import { gts } from '../lib/getThemeStyle'
import { useTranslation } from '../lib/i18n'

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  margin-left: auto;
  .per-page-select-label {
    line-height: 1;
    margin: 0 ${gts('xsMargin')}px 0 auto;
  }
`

const ItemsPerPage: React.FC<{ perPage: number, onChange: any }> = ({ perPage, onChange }) => {
  const { t } = useTranslation()

  const options = [
    {
      value: 10,
      label: '10'
    },
    {
      value: 25,
      label: '25'
    },
    {
      value: 50,
      label: '50'
    },
    {
      value: 100,
      label: '100'
    }
  ]

  let selectedOption = options.find((option) => option.value === perPage)

  // if users sets per-page value in url bar manually, then show that value in the select-menu
  if (!selectedOption) {
    selectedOption = { value: perPage, label: `${perPage}` }
    options.push(selectedOption)
  }

  const onItemsPerPageChange = ({ value }: { value: number }) => onChange(value)

  return (
    <Wrapper className="hide-xs">
      <HeadingText className="per-page-select-label">{t('home:itemsPerPage')}:</HeadingText>
      <Dropdown
        className="selectElem"
        value={selectedOption}
        onChange={onItemsPerPageChange}
        options={options}
      />
    </Wrapper>
  )
}

export default ItemsPerPage
