import { useState, useEffect, ChangeEvent, FormEvent, useRef } from 'react'
import Head from 'next/head'
import styled from 'styled-components'

import { ExpenseFilterProps } from '../types/components'
import Input from './styles/Input'
import { gts } from '../lib/getThemeStyle'
import { getTypewriterStrings } from '../lib/filterUtils'
import { useTranslation, Router } from '../lib/i18n'

const StyledFilter = styled.div`
  margin-bottom: ${gts('xlMargin')}px;
  position: relative;
  input {
    width: 100%;
    padding: 10px calc(2rem + 20px) 10px 5px;
    transition: 0.2s;
    line-height: 1;
    font-size: 1.5rem;
    &:focus + label {
      opacity: 1;
    }
    &:placholder {
      line-height: 1;
    }
  }
  @media (max-width: ${gts('mobileScreenRes')}) {
    margin-bottom: ${gts('mdMargin')}px;
  }
`
const StyledLabel = styled.label`
  --dim: 2rem;
  position: absolute;
  bottom: 12px;
  right: 10px;
  display: block;
  opacity: 0.2;
  transiton: 0.2s;
  width: var(--dim);
  height: var(--dim);
  background-image: url('/static/images/search.svg');
  background-color: ${gts('white')};
  background-repeat: no-repeat;
`

const ExpenseFilter: React.FC<ExpenseFilterProps> = ({ filterText, perPage, offset }) => {
  const { t } = useTranslation()
  const [counter, changeCounter] = useState(0)
  const [filterVal, changeFilterVal] = useState(filterText)
  const pStringsRef = useRef(
    getTypewriterStrings([
      t('common:name'),
      t('common:comment'),
      t('common:merchant'),
      t('common:currency'),
      t('common:amount')
    ])
  )

  useEffect(() => {
    let timeoutId: number | undefined

    if (!filterVal) {
      timeoutId = setTimeout(() => {
        changeCounter((counter + 1) % (pStringsRef.current.length - 1))
      }, 200)
    } else {
      clearTimeout(timeoutId)
    }

    return () => clearTimeout(timeoutId)
  }, [counter, filterVal])

  useEffect(() => {
    changeFilterVal('')
  }, [offset, perPage])

  const onFilterChange = ({ currentTarget: { value } }: ChangeEvent<HTMLInputElement>) =>
    changeFilterVal(value)

  const onSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    const val = event.currentTarget.search.value.trim()
    if (val) {
      Router.push(`/?offset=${offset}&limit=${perPage}&search=${val}`)
    }
  }

  return (
    <StyledFilter>
      <Head>
        <title>
          {t('home:search')} — {filterVal}
        </title>
      </Head>
      <form onSubmit={onSubmit}>
        <Input
          placeholder={`${t('home:filterPlaceholder')} ${pStringsRef.current[counter]}_`}
          id="filter"
          type="text"
          name="search"
          value={filterVal}
          onChange={onFilterChange}
          autoComplete="off"
        />
        <StyledLabel htmlFor="filter" />
      </form>
    </StyledFilter>
  )
}
export default ExpenseFilter
