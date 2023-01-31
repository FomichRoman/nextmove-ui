import { Header } from './header/Header'
import s from './layout.module.scss'
import Head from 'next/head'
import { Sidebar } from './sidebar/Sidebar'
import { ReactNode } from 'react'

export interface ILayout {
	title: string
	children: ReactNode
}

export const Layout = ({ title, children }: ILayout) => {
	return (
		<>
			<Head>
				<title>{title}</title>
			</Head>
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
