const objectHasText = (obj: Record<string, any>, text: string) => {
  const filterText = text
    .trim()
    .replace(/\s+/g, ' ')
    .toLowerCase()
  const values = Object.values(obj)

  return values.some((value) => value.toLowerCase().includes(filterText))
}

export { objectHasText }
