import React from 'react'
import Head from 'next/head'
import Link from 'next/link'
import PaginationStyles from './styles/PaginationStyles'
import { PaginationProps } from '../types/components'
import styled from 'styled-components'
import { gts } from '../lib/getThemeStyle'
import { Router } from 'express'

const PaginationWrapper = styled.div`
  padding: ${gts('mdMargin')}px 0 ${gts('lgMargin')}px;
`

const Pagination: React.FC<PaginationProps> = ({ offset, total, perPage }) => {
  const pages = Math.ceil(total / perPage)
  const page = Math.ceil((offset + 1) / perPage)
  const prevOffset = offset - perPage > 0 ? offset - perPage : 0
  const nextOffset = offset + perPage

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
            path: '/',
            query: {
              offset: prevOffset,
              limit: perPage
            }
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
            path: '/',
            query: {
              offset: nextOffset,
              limit: perPage
            }
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
