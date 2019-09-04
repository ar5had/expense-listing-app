const objectHasText = (obj: Record<string, any>, text: string) => {
  const filterText = text
    .trim()
    .replace(/\s+/g, ' ')
    .toLowerCase()
  const values = Object.values(obj)

  return values.some((value) => value.toLowerCase().includes(filterText))
}

const getTypewriterStrings: (arr: string[]) => string[] = (arr: string[]) => {
  let res: string[] = []

  const getAllStr: (str: string) => void = (str) => {
    const len = str.length * 2 - 1
    const extraElem = 3

    const strArr = new Array(len + extraElem).fill(str)

    for (let i = 0; i < Math.ceil(len / 2); i++) {
      const chars = i > 0 ? strArr[i - 1] + str[i] : str[i]
      strArr[i] = chars
      strArr[len + extraElem - i - 1] = chars
    }

    res = res.concat(strArr).concat(['', '', ''])
  }

  arr.forEach(getAllStr)

  return res
}

export { objectHasText, getTypewriterStrings }
