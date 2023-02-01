import { Header } from './header/Header'
import s from './layout.module.scss'
import { Sidebar } from './sidebar/Sidebar'
import { ReactNode } from 'react'
import Meta from '@/utils/meta/Meta'

export interface ILayout {
	title: string
	description?: string
	children: ReactNode
}

export const Layout = ({ title, description, children }: ILayout) => {
	return (
		<>
			<Meta title={title} description={description} />
			<main className={s.main}>
        <Sidebar />
        <section className={s.content}>
          <Header />
          <div className={s.wrapper}>
            {children}
          </div>
        </section>
			</main>
		</>
	)
}
