import Head from 'next/head'
import Link from 'next/link'
import styled from 'styled-components'

import PaginationStyles from './styles/PaginationStyles'
import { gts } from '../lib/getThemeStyle'
import { useTranslation } from '../lib/i18n'

interface PaginationProps {
  total: number
  perPage: number
  offset: number
}

const PaginationWrapper = styled.div`
  padding: ${gts('mdMargin')}px 0 0;
`

const Pagination: React.FC<PaginationProps> = ({ offset, total, perPage }) => {
  const { t } = useTranslation()

  const pages = Math.ceil(total / perPage)
  const page = Math.ceil((offset + 1) / perPage)
  const prevOffset = offset - perPage > 0 ? offset - perPage : 0
  const nextOffset = offset + perPage

  return (
    <PaginationWrapper>
      <Head>
        <title>
          {t('home:heading')} — {t('home:title', { page, pages })}
        </title>
      </Head>
      <PaginationStyles data-test="pagination">
        <Link href={`/?offset=${prevOffset}&limit=${perPage}`}>
          <a className="prev" aria-disabled={page <= 1 && offset <= 0}>
            ← {t('home:prev')}
          </a>
        </Link>
        <p className="hide-xs">{t('home:title', { page, pages })}</p>
        <p className="hide-sm">{t('home:totalItems', { total })}</p>
        <Link href={`/?offset=${nextOffset}&limit=${perPage}`}>
          <a className="next" aria-disabled={page >= pages}>
            {t('home:next')} →
          </a>
        </Link>
      </PaginationStyles>
    </PaginationWrapper>
  )
}

export default Pagination
