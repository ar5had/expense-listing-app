import NextI18Next from 'next-i18next'
import { useTranslation as originalUseTranslation } from 'react-i18next'
import { NextComponentType, NextPageContext } from 'next'

const NextI18NextInstance = new NextI18Next({
  browserLanguageDetection: true,
  defaultLanguage: 'en',
  defaultNS: 'common',
  fallbackLng: 'en',
  otherLanguages: ['fr'],
  localeSubpaths: {
    fr: 'fr',
    en: 'en'
  }
})

export default NextI18NextInstance
export const { appWithTranslation, Link, Router } = NextI18NextInstance
export const useTranslation = originalUseTranslation
export type I18nPage<P = {}> = NextComponentType<
  NextPageContext,
  { namespacesRequired: string[] },
  P & { namespacesRequired: string[] }
>
