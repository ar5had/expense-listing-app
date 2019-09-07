import { ExpenseProps } from '../components/types/common'

// Not using toFixed as it rounds the number but all we want is the first two fraction digits
const parseAmount = (number: string) => parseInt(`${parseFloat(number) * 100}`) / 100

// Filters expenses by the amount value for searched string having `OPERATOR VALUE CURRENCY` format
// Examples -
// `> 20 eur` will filter out all the expenses which are greater than 20 eur
// `< 20 eur` will filter out all the expenses which are less than 20 eur
// `= 20 eur` will filter out all the expenses which are equal 20 eur
const filterByAmount = (data: ExpenseProps[], text: string) => {
  const fText = text.trim()
  const operator = fText[0]
  const fCurrency = fText.slice(-3)
  const fValue = parseAmount(fText.slice(1, -3).trim())

  return data.filter(({ amount: { value, currency } }) => {
    if (currency.toLocaleLowerCase() === fCurrency.toLocaleLowerCase()) {
      const nValue = parseAmount(value)
      switch (operator) {
        case '>':
          return nValue > fValue
        case '<':
          return nValue < fValue
        default:
          return nValue === fValue
      }
    }

    return false
  })
}

const arrHasText = (arr: string[], text: string) => {
  const fText = text
    .trim()
    .replace(/\s+/g, ' ')
    .toLocaleLowerCase()

  return arr.some((elem) => elem.toLowerCase().includes(fText))
}

const filterByString = (data: ExpenseProps[], text: string) =>
  data.filter((expense) => {
    const {
      merchant,
      comment,
      user: { first, last, email },
      amount: { value, currency }
    } = expense

    // Supporting multiple searching/filtering formats for name and currency-value pair
    // for example -
    // <FIRST LAST> and <LAST FIRST> -> arshad khan, khan arshad
    // <CURR VAL> and <VAL CURR> -> USD 10, 10 USD
    const firstLastName = `${first} ${last}`
    const lastFirstName = `${last} ${first}`
    const currVal = `${value} ${currency}`
    const valCurr = `${currency} ${value}`
    const sCurrVal = `${value}${currency}`
    const sValCurr = `${currency}${value}`

    const filterValues = [
      merchant,
      comment,
      firstLastName,
      lastFirstName,
      currVal,
      valCurr,
      sCurrVal,
      sValCurr,
      email
    ]

    return arrHasText(filterValues, text)
  })

const filterExpenseData = (data: ExpenseProps[], text: string) => {
  const regex = /^\s*(>|<|=)\s*([0-9])+\.?([0-9])*\s*([a-z]{3})\s*$/i
  const isAmountFilter = regex.test(text)

  if (isAmountFilter) {
    return filterByAmount(data, text)
  }

  return filterByString(data, text)
}

// For string 'asd', it returns ['a', 'as', 'asd', 'asd', 'asd', 'asd', 'as', 'a']
// The extra 'asd' are the extra elements
const splitStr: (str: string) => string[] = (str) => {
  const lStr = str.toLocaleUpperCase()
  const len = lStr.length * 2 - 1
  const extraElem = 3

  const strArr = new Array(len + extraElem).fill(lStr)

  for (let i = 0; i < Math.ceil(len / 2); i++) {
    const chars = i > 0 ? strArr[i - 1] + lStr[i] : lStr[i]
    strArr[i] = chars
    strArr[len + extraElem - i - 1] = chars
  }

  // Extra elems and extra empty spaces gives a PAUSE effect when updating placeholder string
  return strArr.concat(['', '', '', ''])
}

const getPlaceholderStrings: (strArr: string[]) => string[] = (strArr) =>
  strArr.reduce((t: string[], e: string) => t.concat(splitStr(e)), [])

export { filterExpenseData, getPlaceholderStrings }
