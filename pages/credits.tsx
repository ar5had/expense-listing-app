import Head from 'next/head'
import styled from 'styled-components'

import Heading from '../components/styles/Heading'
import BackToHome from '../components/BackToHome'
import { gts } from '../lib/getThemeStyle'
import { I18nPage, useTranslation } from '../lib/i18n'

const StyledDiv = styled.div`
  margin: ${gts('mdMargin')}px 0 ${gts('xlMargin')}px;
  .heading {
    margin: ${gts('mdMargin')}px 0;
  }
  line-height: 2;
  text-align: center;
  .links-container > * {
    margin-bottom: 2rem;
    color: ${gts('darkGrey')};
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
      <div className="links-container">
        <p>
          {t('credits:iconMadeBy')}{' '}
          <a href="https://www.flaticon.com/authors/lucy-g" title="Lucy G">
            Lucy G
          </a>{' '}
          {t('credits:from')}{' '}
          <a href="https://www.flaticon.com/" title="Flaticon">
            www.flaticon.com
          </a>
        </p>
        <p>
          {t('credits:iconMadeBy')}{' '}
          <a href="https://www.flaticon.com/authors/graphicsbay" title="GraphicsBay">
            GraphicsBay
          </a>{' '}
          {t('credits:from')}{' '}
          <a href="https://www.flaticon.com/" title="Flaticon">
            www.flaticon.com
          </a>
        </p>
      </div>
    </StyledDiv>
  )
}

Credits.getInitialProps = async () => ({
  namespacesRequired: ['credits', 'common']
})

export default Credits
