import React from 'react'
import Head from 'next/head'
import Link from 'next/link'
import PaginationStyles from './styles/PaginationStyles'
import { PaginationProps } from './types'
import styled from 'styled-components'
import { gts } from '../lib/getThemeStyle'

const PaginationWrapper = styled.div`
  padding: ${gts('mdMargin')}px 0 ${gts('lgMargin')}px;
`

const Pagination: React.FC<PaginationProps> = ({ page, total, perPage }) => {
  const pages = Math.ceil(total / perPage)

  return (
    <PaginationWrapper>
      <PaginationStyles data-test="pagination">
        <Head>
          <title>
            Pleo — Page {page} of {pages}
          </title>
        </Head>
        <Link
          href={{
            pathname: '/',
            query: { page: page - 1 }
          }}
        >
          <a className="prev" aria-disabled={page <= 1}>
            ← Prev
          </a>
        </Link>
        <p>
          Page {page} of <span className="totalPages">{pages}</span>
        </p>
        <p>{total} Items Total</p>
        <Link
          href={{
            pathname: '/',
            query: { page: page + 1 }
          }}
        >
          <a className="next" aria-disabled={page >= pages}>
            Next →
          </a>
        </Link>
      </PaginationStyles>
    </PaginationWrapper>
  )
}

export default Pagination
