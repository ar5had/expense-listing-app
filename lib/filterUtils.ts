import { ExpenseProps } from '../components/types/common'

const arrHasText = (arr: string[], text: string) => {
  const filterText = text
    .trim()
    .replace(/\s+/g, ' ')
    .toLocaleLowerCase()

  return arr.some((elem) => elem.toLowerCase().includes(filterText))
}

const filterByAmount = (data: ExpenseProps[], text: string) => {
  const filterText = text.trim()
  const operator = filterText[0]
  const fCurrency = filterText.slice(-3)
  const fValue = parseInt(filterText.slice(1, -3).trim(), 10)

  return data.filter(({ amount: { value, currency } }) => {
    if (currency.toLocaleLowerCase() === fCurrency.toLocaleLowerCase()) {
      const valNum = parseInt(value, 10)

      switch (operator) {
        case '>':
          return valNum > fValue
        case '<':
          return valNum < fValue
        default:
          return valNum === fValue
      }
    } else {
      return false
    }
  })
}

const filterByString = (data: ExpenseProps[], text: string) =>
  data.filter((expense) => {
    const {
      merchant,
      comment,
      user: { first, last, email },
      amount: { value, currency }
    } = expense

    // Supporting multiple searching/filterign formats for name and currency-value pair
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
  const regex = /^\s*(>|<|=)\s*([0-9])+\s*([a-z]{3})\s*$/i
  const isAmountOperation = regex.test(text)

  // filter amount data
  if (isAmountOperation) {
    return filterByAmount(data, text)
  }

  // filter string data
  return filterByString(data, text)
}

const getTypewriterStrings: (strArr: string[]) => string[] = (strArr: string[]) => {
  let res: string[] = []

  // for string 'asd', it returns ['a', 'as', 'asd', 'asd', 'asd', 'asd', 'as', 'a']
  // the extra 'asd' are the extra elements
  const getAllStr: (str: string) => void = (str) => {
    const lStr = str.toLocaleUpperCase()
    const len = lStr.length * 2 - 1
    const extraElem = 3

    const strArr = new Array(len + extraElem).fill(lStr)

    for (let i = 0; i < Math.ceil(len / 2); i++) {
      const chars = i > 0 ? strArr[i - 1] + lStr[i] : lStr[i]
      strArr[i] = chars
      strArr[len + extraElem - i - 1] = chars
    }

    // extra elems and extra empty spaces gives a STOP effect when updating placeholder string
    res = res.concat(strArr).concat(['', '', '', ''])
  }

  strArr.forEach(getAllStr)

  return res
}

export { filterExpenseData, getTypewriterStrings }
