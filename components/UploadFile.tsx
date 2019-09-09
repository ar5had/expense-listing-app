import { useRef, ChangeEvent } from 'react'
import styled from 'styled-components'

import UploadIcon from './UploadIcon'
import { imageToBase64 } from '../lib/base64Utils'
import { Image } from './types/common'

interface UploadFileProps {
  addReceipt: ({ preview, file, url }: Image) => void
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

  const onChange = ({ target: { validity, files } }: ChangeEvent<HTMLInputElement>) => {
    const file = files && files[0]
    const isValid = validity.valid
    const isImage = file && /^image/.test(file.type)

    // Validation - don't load the file if it is invalid or not image
    if (!isValid || !isImage) {
      console.log('Wrong file format!')
      return
    }

    if (file) {
      imageToBase64(file)
        .then((result: string) => {
          addReceipt({ preview: result, url: '', file })
        })
        .catch(() => {
          console.log("Error: Image can't be converted into base64 format!")
        })
    }
  }

  const openImageSelectWindow = () => inputElem.current && inputElem.current.click()

  return (
    <UploadFileWrapper>
      <input id={inputId} ref={inputElem} type="file" accept="image/*" onChange={onChange} />
      <UploadIcon onClick={openImageSelectWindow} />
    </UploadFileWrapper>
  )
}

export default UploadFile
