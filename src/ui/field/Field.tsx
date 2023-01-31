import { IField } from './field.interface'
import s from './field.module.scss'
import { forwardRef } from 'react'

export const Field = forwardRef<HTMLInputElement, IField>(
	({ error, type = 'text', style, ...rest }, ref) => {
		return (
			<div className={s.input} style={style}>
				<input ref={ref} type={type} {...rest} />
				{error && <div className={s.error}>{error.message}</div>}
			</div>
		)
	}
)

Field.displayName = 'Field'
