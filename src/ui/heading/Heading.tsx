import { FC } from 'react'
import s from './Heading.module.scss'

interface IHeading {
  title: string
}

const Heading: FC<IHeading> = ({ title }) => {
  return (
    <div className={s.title}><h2>{title}</h2></div>
  )
}



export default Heading