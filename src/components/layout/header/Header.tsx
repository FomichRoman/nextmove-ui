import s from './header.module.scss'
import { IconsRight } from './icons-right/IconsRight'
import { Search } from './search/Search'


export const Header = () => {
  return (
    <header className={s.header}>
      <Search />
      <IconsRight />
    </header>
  )
}