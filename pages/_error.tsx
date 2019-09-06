import Head from 'next/head'
import styled from 'styled-components'

import { I18nPage, useTranslation } from '../lib/i18n'
import { gts } from '../lib/getThemeStyle'
import HeadingText from '../components/styles/HeadingText'

const Wrapper = styled.div`
  text-align: center;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 100%;
  padding: 20px 40px;
  b {
    color: ${gts('black')};
  }
`

const Error: I18nPage = () => {
  const { t } = useTranslation()

  return (
    <Wrapper>
      <Head>
        <title>404 — {t('common:pageNotFound')}</title>
      </Head>
      <HeadingText>
        <b>404 — </b> {t('common:pageNotFound')}
      </HeadingText>
    </Wrapper>
  )
}

Error.getInitialProps = async () => ({
  namespacesRequired: ['common']
})

export default Error
