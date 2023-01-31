import { forwardRef } from 'react'
import { ITextArea } from './text-area.interface'
import s from './textarea.module.scss'


export const TextArea = forwardRef<HTMLTextAreaElement, ITextArea>(
	({ error, style, ...rest }, ref) => {
		return (
			<div className={s.editor} style={style}>
				<textarea ref={ref} {...rest} />
				{error && <div className={s.error}>{error.message}</div>}
			</div>
		)
	}
)
