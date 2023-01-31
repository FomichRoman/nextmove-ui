import { Menuitem } from './Menuitem'
import { IMenu } from './menu.interface'
import s from './menu.module.scss'
import { Line } from '@/ui/line/Line'

export const Menu = ({ title, items }: IMenu) => {
	return (
		<nav className={s.mnu_sidebar}>
			<h3>{title}</h3>
			<ul>
				{items.map(item => (
					<Menuitem
						key={item.title}
						link={item.link}
						title={item.title}
						Icon={item.Icon}
						image={item.image}
					/>
				))}
			</ul>
      <Line />
		</nav>
	)
}
