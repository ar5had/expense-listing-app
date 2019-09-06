import styled from 'styled-components'
import { FilterResultsHeadingProps } from 'types/components'
import { gts } from '../lib/getThemeStyle'
import { useTranslation } from '../lib/i18n'

const Wrapper = styled.div`
  .content {
    color: ${gts('black')};
    font-size: 1.5rem;
    line-height: 1.5;
  }
  margin-bottom: ${gts('mdMargin')}px;
  @media (max-width: ${gts('mobileScreenRes')}) {
    padding-top: ${gts('smMargin')}px;
  }
`

const FilterResultsHeading: React.FC<FilterResultsHeadingProps> = ({ length, filterText }) => {
  const { t } = useTranslation()
  return filterText ? (
    <Wrapper>
      <p className="content">
        {t('home:resultsHeading', { length })} <b>'{filterText}'</b>
      </p>
    </Wrapper>
  ) : null
}

export default FilterResultsHeading
