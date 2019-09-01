const imageToBase64 = (file: File) =>
  new Promise((resolve, reject) => {
    const reader: any = new FileReader()

    // read file when loading completes
    reader.onload = () => {
      resolve(reader.result)
    }

    // error handler
    reader.onerror = reject

    // convert data to base64
    reader.readAsDataURL(file)
  })

export { imageToBase64 }
