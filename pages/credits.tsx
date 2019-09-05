import Head from 'next/head'
import { NextPage } from 'next'
import styled from 'styled-components'
import { gts } from '../lib/getThemeStyle'
import Heading from '../components/styles/Heading'
import BackToHome from '../components/BackToHome'

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

const Credits: NextPage = () => (
  <StyledDiv>
    <Head>
      <title>Credits</title>
    </Head>
    <BackToHome />
    <Heading className="heading">Icon Credits</Heading>
    <div className="link-container">
      <div>
        Icons made by{' '}
        <a href="https://www.flaticon.com/authors/lucy-g" title="Lucy G">
          Lucy G
        </a>{' '}
        from{' '}
        <a href="https://www.flaticon.com/" title="Flaticon">
          www.flaticon.com
        </a>
      </div>
      <div>
        Icons made by{' '}
        <a href="https://www.flaticon.com/authors/graphicsbay" title="GraphicsBay">
          GraphicsBay
        </a>{' '}
        from{' '}
        <a href="https://www.flaticon.com/" title="Flaticon">
          www.flaticon.com
        </a>
      </div>
    </div>
  </StyledDiv>
)

export default Credits
