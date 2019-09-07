import { useRef } from 'react'
import styled from 'styled-components'

import UploadIcon from './UploadIcon'
import { imageToBase64 } from '../lib/base64Utils'

interface UploadFileProps {
  addReceipt: (value: string) => void
  inputId?: string
}

const UploadFileWrapper = styled.div`
  input[type='file'] {
    display: none;
  }
`

const UploadFile: React.FC<UploadFileProps> = ({ addReceipt, inputId = '' }) => {
  // ref holding the receipt image element
  const inputElem = useRef<HTMLInputElement>(null)

  const onChange = ({ target: { validity, files } }: any) => {
    const file: any = files[0]
    const isValid = validity.valid
    const isImage = file && /^image/.test(file.type)

    // Validation - don't load the file if it is invalid or not image
    if (!isValid || !isImage) {
      console.log('Wrong file format!')
      return
    }

    imageToBase64(file)
      .then((result: any) => {
        addReceipt(result)
      })
      .catch(() => {
        console.log("Error: Image can't be converted into base64 format!")
      })
  }

  // @ts-ignore
  const openImageSelectWindow = () => inputElem.current.click()

  return (
    <UploadFileWrapper>
      <input id={inputId} ref={inputElem} type="file" accept="image/*" onChange={onChange} />
      <UploadIcon onClick={openImageSelectWindow} />
    </UploadFileWrapper>
  )
}

export default UploadFile
