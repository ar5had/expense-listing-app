import styled from 'styled-components'

import { gts } from '../lib/getThemeStyle'
import { useTranslation } from '../lib/i18n'

interface FilterResultsInfoProps {
  length: number
  filterText: string
}

const Wrapper = styled.div`
  p {
    color: ${gts('black')};
    font-size: 1.4rem;
    line-height: 1.5;
    word-break: break-word;
  }
  margin-bottom: ${gts('mdMargin')}px;
  @media (max-width: ${gts('mobileScreenRes')}) {
    padding-top: ${gts('smMargin')}px;
  }
`

const FilterResultsInfo: React.FC<FilterResultsInfoProps> = ({ length, filterText }) => {
  const { t } = useTranslation()
  return filterText ? (
    <Wrapper>
      <p>
        {t('home:resultsHeading', { length })} <b>'{filterText}'</b>
      </p>
    </Wrapper>
  ) : null
}

export default FilterResultsInfo
