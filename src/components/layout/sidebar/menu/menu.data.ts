import { IMenuItem } from './menu.interface'
import { HiChartBar, HiCollection, HiHome, HiStar } from 'react-icons/hi'

export const menu: IMenuItem[] = [
	{
		title: 'Главная',
		Icon: HiHome,
		link: '/'
	},
  {
		title: 'Тренды',
		Icon: HiChartBar,
		link: '/trending'
	},
  {
		title: 'Мой канал',
		Icon: HiStar,
		link: '/my-channel'
	},
  {
		title: 'Мои подписки',
		Icon: HiCollection,
		link: '/subscriptions'
	}
]
