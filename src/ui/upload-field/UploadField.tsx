import s from './UploadField.module.scss'
import { IUploadField } from './upload-field.interface'
import { useUploadFile } from './useUploadFile'
import { FC } from 'react'

const UploadField: FC<IUploadField> = ({
	title,
	onChange,
	folder,
	setValue,
	setIsChosen
}) => {
	const { uploadFile } = useUploadFile(onChange, folder, setValue, setIsChosen)
	return <div className={s.file}>
    {title && <h1>{title}</h1>}
    <label>
      <span className={'sr-only'}>Выбери файл</span>
      <input type="file" onChange={uploadFile} />
    </label>
  </div>
}

export default UploadField
