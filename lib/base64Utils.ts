const imageToBase64 = (file: File) =>
  new Promise<string>((resolve, reject) => {
    const reader: FileReader = new FileReader()

    reader.onload = () => {
      if (reader.result && typeof reader.result === 'string') {
        resolve(reader.result as string)
      } else {
        reject()
      }
    }

    reader.onerror = reject
    reader.readAsDataURL(file)
  })

export { imageToBase64 }
