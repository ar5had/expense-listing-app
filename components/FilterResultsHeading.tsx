import styled from 'styled-components'
import { FilterResultsHeadingProps } from 'types/components'
import { gts } from '../lib/getThemeStyle'

const Wrapper = styled.div`
  .content {
    color: ${gts('darkGrey')};
    font-size: 1.5rem;
    line-height: 1.5;
    b {
      color: ${gts('black')};
    }
  }
  margin-bottom: ${gts('mdMargin')}px;
  @media (max-width: ${gts('mobileScreenRes')}) {
    padding-top: ${gts('smMargin')}px;
  }
`

const FilterResultsHeading: React.FC<FilterResultsHeadingProps> = ({ length, filterText }) =>
  filterText ? (
    <Wrapper>
      <p className="content">
        Showing {length} result{length > 1 ? 's' : ''} for <b>'{filterText}'</b>
      </p>
    </Wrapper>
  ) : null

export default FilterResultsHeading
