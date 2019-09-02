import { useRef } from 'react'
import styled from 'styled-components'
import { UploadFileProps } from '../types/components'
import { imageToBase64 } from '../lib/base64Utils'
import CardWithBtn from './CardWithBtn'

const UploadFileWrapper = styled.div`
  input[type='file'] {
    width: 0;
    height: 0;
    visibility: hidden;
    display: inline;
    float: right;
  }
`

const UploadFile: React.FC<UploadFileProps> = ({ addReceipt }) => {
  // ref holding the receipt image element
  const inputElem: any = useRef<HTMLInputElement>(null)

  const onChange = ({ target: { validity, files } }: any) => {
    const file: any = files[0]
    const isValid = validity.valid
    const isImage = file && /^image/.test(file.type)

    // validation -
    // don't load the file if it is invalid or not image
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

  const openImageSelectWindow = () => inputElem.current.click()

  return (
    <UploadFileWrapper>
      <CardWithBtn onClick={openImageSelectWindow} />
      <input ref={inputElem} type="file" accept="image/*" onChange={onChange} />
    </UploadFileWrapper>
  )
}

export default UploadFile
