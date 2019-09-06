import { ExpenseProps } from 'types/components'

const arrHasText = (arr: string[], text: string) => {
  const filterText = text
    .trim()
    .replace(/\s+/g, ' ')
    .toLowerCase()

  return arr.some((elem) => elem.toLowerCase().includes(filterText))
}

const filterByAmount = (data: ExpenseProps[], text: string) => {
  const filterText = text.trim()
  const op = text[0]
  const fCurrency = filterText.trim().slice(-3)
  const fValue = parseInt(filterText.slice(1, -3).trim(), 10)
  return data.filter(({ amount: { value, currency } }) => {
    if (currency.toLocaleLowerCase() === fCurrency.toLocaleLowerCase()) {
      const valNum = parseInt(value, 10)
      switch (op) {
        case '>':
          return valNum > fValue
        case '<':
          return valNum < fValue
        default:
          return valNum === fValue
          break
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

    // By doing this we are supporting multiple formats of name and currency-value pair
    // EX - First LAST and  LAST FIRST -> Arshad khan, khan arshad
    // EX - CURR VAL and VAL CURR -> USD 10, 10 USD
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

const getTypewriterStrings: (arr: string[]) => string[] = (arr: string[]) => {
  let res: string[] = []

  const getAllStr: (str: string) => void = (normalStr) => {
    const str = normalStr.toLocaleUpperCase()
    const len = str.length * 2 - 1
    const extraElem = 3

    const strArr = new Array(len + extraElem).fill(str)

    for (let i = 0; i < Math.ceil(len / 2); i++) {
      const chars = i > 0 ? strArr[i - 1] + str[i] : str[i]
      strArr[i] = chars
      strArr[len + extraElem - i - 1] = chars
    }

    res = res.concat(strArr).concat(['', '', '', ''])
  }

  arr.forEach(getAllStr)

  return res
}

export { filterExpenseData, getTypewriterStrings }
