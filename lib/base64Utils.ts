const imageToBase64 = (file: File) =>
  new Promise((resolve, reject) => {
    const reader: any = new FileReader()
    // Read file when loading completes
    reader.onload = () => {
      resolve(reader.result)
    }
    // Error handler
    reader.onerror = reject
    // Convert data to base64
    reader.readAsDataURL(file)
  })

export { imageToBase64 }
