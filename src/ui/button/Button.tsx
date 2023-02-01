import { IButton } from './button.interface'
import s from './button.module.scss'
import cn from 'classnames'
import { PropsWithChildren } from 'react'

export const Button = ({
	children,
	className,
	...rest
}: PropsWithChildren<IButton>) => {
	return <button className={cn(s.button, className)} {...rest}>{children}</button>
}