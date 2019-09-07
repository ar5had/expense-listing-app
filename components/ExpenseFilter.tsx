import { useState, useEffect, ChangeEvent, FormEvent, useRef } from 'react'
import Head from 'next/head'
import Router from 'next/router'
import styled from 'styled-components'

import Input from './styles/Input'
import { gts } from '../lib/getThemeStyle'
import { getTypewriterStrings } from '../lib/filterUtils'
import { useTranslation } from '../lib/i18n'

interface ExpenseFilterProps {
  filterText: string
  perPage: number
  offset: number
}

const StyledFilter = styled.div`
  margin-bottom: ${gts('xlMargin')}px;
  form {
    position: relative;
  }
  input {
    width: 100%;
    padding: 10px calc(2rem + 20px) 10px 5px;
    transition: 0.2s;
    font-size: 1.5rem;
    &:focus + label {
      opacity: 1;
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
  background-repeat: no-repeat;
`

const ExpenseFilter: React.FC<ExpenseFilterProps> = ({ filterText, perPage, offset }) => {
  const { t, i18n } = useTranslation()
  const [counter, changeCounter] = useState(0)
  const [filterVal, changeFilterVal] = useState(filterText)
  const pStringsRef = useRef<string[]>([''])

  // New placeholder strings are only computed when language changes
  useEffect(() => {
    pStringsRef.current = getTypewriterStrings([
      t('common:name'),
      t('common:comment'),
      t('common:merchant'),
      t('common:currency'),
      t('common:amount'),
      t('common:email')
    ])
  }, [i18n.language])

  // UI effect for changing the placholder to let user know what filter fields can be searched
  useEffect(() => {
    let timeoutId: number | undefined
    const placeholderStrings = pStringsRef.current

    if (!filterVal && placeholderStrings) {
      timeoutId = setTimeout(() => {
        changeCounter((counter + 1) % (placeholderStrings.length - 1))
      }, 200)
    } else {
      clearTimeout(timeoutId)
    }

    return () => clearTimeout(timeoutId)
  }, [counter, filterVal])

  // Resets filter when offset and items-per-page values are changed
  useEffect(() => {
    changeFilterVal('')
  }, [offset, perPage])

  const onFilterChange = ({ currentTarget: { value } }: ChangeEvent<HTMLInputElement>) =>
    changeFilterVal(value)

  const onSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    const val = event.currentTarget.search.value.trim()
    Router.push(`/?offset=${offset}&limit=${perPage}&search=${val}`)
  }

  const placeholderStrings = pStringsRef.current

  return (
    <StyledFilter>
      <Head>
        <title>
          {t('home:search')} — {filterVal}
        </title>
      </Head>
      <form onSubmit={onSubmit}>
        <Input
          placeholder={`${t('home:filterPlaceholder')} ${placeholderStrings &&
            placeholderStrings[counter]}_`}
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
