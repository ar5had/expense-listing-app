import Head from 'next/head'
import styled from 'styled-components'

import { gts } from '../lib/getThemeStyle'
import Heading from '../components/styles/Heading'
import BackToHome from '../components/BackToHome'
import { I18nPage, useTranslation } from '../lib/i18n'

const StyledDiv = styled.div`
  margin: ${gts('mdMargin')}px 0 ${gts('xlMargin')}px;
  color: ${gts('darkGrey')};
  .heading {
    margin: ${gts('mdMargin')}px 0;
    color: ${gts('black')};
  }
  line-height: 2;
  text-align: center;
  grid-gap: ${gts('smMargin')}px;
  .link-container {
    display: grid;
    grid-template-columns: 1fr;
    grid-gap: ${gts('smMargin')}px;
  }
  @media (max-width: ${gts('mobileScreenRes')}) {
    margin: ${gts('smMargin')}px 0 ${gts('mdMargin')}px;
    .heading {
      margin: ${gts('mdMargin')}px 0;
    }
  }
`

const Credits: I18nPage = () => {
  const { t } = useTranslation()

  return (
    <StyledDiv>
      <Head>
        <title>{t('common:credits')}</title>
      </Head>
      <BackToHome />
      <Heading className="heading">{t('credits:heading')}</Heading>
      <div className="link-container">
        <div>
          {t('credits:iconMadeBy')}{' '}
          <a href="https://www.flaticon.com/authors/lucy-g" title="Lucy G">
            Lucy G
          </a>{' '}
          {t('credits:from')}{' '}
          <a href="https://www.flaticon.com/" title="Flaticon">
            www.flaticon.com
          </a>
        </div>
        <div>
          {t('credits:iconMadeBy')}{' '}
          <a href="https://www.flaticon.com/authors/graphicsbay" title="GraphicsBay">
            GraphicsBay
          </a>{' '}
          {t('credits:from')}{' '}
          <a href="https://www.flaticon.com/" title="Flaticon">
            www.flaticon.com
          </a>
        </div>
      </div>
    </StyledDiv>
  )
}

Credits.getInitialProps = async () => ({
  namespacesRequired: ['credits', 'common']
})

export default Credits
