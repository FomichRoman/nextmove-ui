import s from './FooterForm.module.scss'
import cn from 'classnames'
import { FC } from 'react'
import { MdCheckCircle, MdUpload } from 'react-icons/md'
import { Button } from '@/ui/button/Button'

interface IFooterForm {
	percent: number
	isUploaded: boolean
}

const FooterForm: FC<IFooterForm> = ({ percent, isUploaded }) => {
	return (
		<div className={s.footer}>
			<div
				className={cn(s.status, { [s['icons-uploaded']]: isUploaded })}
			>
        <MdUpload className={s['upload-icon']} />
        <MdCheckCircle className={s['check-icon']} />
        <span>
          {isUploaded ? 'Видео загружено' : `Загрузка ${percent}%...` }
        </span>
      </div>
      <div>
        <Button>Сохранить</Button>
      </div>
		</div>
	)
}

export default FooterForm
