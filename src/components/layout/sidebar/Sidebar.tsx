import { Menu } from './menu/Menu'
import { menu } from './menu/menu.data'
import s from './sidebar.module.scss'
import { useAuth } from '@/hooks/useAuth'
import { api } from '@/redux/api/api'
import Link from 'next/link'

export const Sidebar = () => {
	const { user } = useAuth()
	const { data, isLoading } = api.useGetProfileQuery(null, {
		skip: !user
	})
	return (
		<div className={s.wrapper}>
			<Link href={'/'} className={s.logo}>
				<img src='/logo.svg' alt='Nextmove' />
			</Link>
			<aside className={s.sidebar}>
				<Menu title={'Меню'} items={menu} />
				{user && (
					<Menu
						title='Мои подписки'
						items={
							data?.subscriptions.map(({ toChannel }) => ({
								image: toChannel.avatarPath,
								title: toChannel.name,
								link: '/c/' + toChannel.id
							})) || []
						}
					/>
				)}
				<div className={s.copy}>2022 Rutube by Fomich Roman</div>
			</aside>
		</div>
	)
}
