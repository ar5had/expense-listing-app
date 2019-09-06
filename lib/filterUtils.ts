import { ExpenseProps } from 'types/components'

const arrHasText = (arr: string[], text: string) => {
  const filterText = text
    .trim()
    .replace(/\s+/g, ' ')
    .toLowerCase()

  return arr.some((elem) => elem.toLowerCase().includes(filterText))
}

const filterExpenseData = (data: ExpenseProps[], text: string) =>
  data.filter((expense) => {
    const {
      merchant,
      comment,
      user: { first, last },
      amount: { value, currency }
    } = expense
    const firstLastName = `${first} ${last}`
    const lastFirstName = `${last} ${first}`
    const currVal = `${value} ${currency}`
    const valCurr = `${currency} ${value}`
    const sCurrVal = `${value}${currency}`
    const sValCurr = `${currency}${value}`
    const flattenedExpenseData = [
      merchant,
      comment,
      firstLastName,
      lastFirstName,
      currVal,
      valCurr,
      sCurrVal,
      sValCurr
    ]

    return arrHasText(flattenedExpenseData, text)
  })

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
