import { IconType } from 'react-icons'

export interface IMenu {
  title: string
  items: IMenuItem[]
}

export interface IMenuItem {
  link: string
  title: string
  Icon?: IconType
  image?: string
}