import { TypeComponentAuthFields } from './private-route.interface'
import dynamic from 'next/dynamic'
import { FC, PropsWithChildren } from 'react'

const DynamicCheckRole = dynamic(() => import('./CheckRole'), {
	ssr: false
})

export const AuthProvider: FC<PropsWithChildren<TypeComponentAuthFields>> = ({
	Component: { isOnlyUser },
	children
}) => {
	return !isOnlyUser ? (
		<>{children}</>
	) : (
		<DynamicCheckRole children={children} Component={{ isOnlyUser }} />
	)
}
