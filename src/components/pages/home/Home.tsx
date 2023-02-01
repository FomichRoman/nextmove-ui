import { IHome } from './home.interface'
import { Layout } from '@/components/layout/Layout'
import { FC } from 'react'
import Discover from './discover/Discover'
import Catalog from './catalog/Catalog'

export const Home: FC<IHome> = ({ randomVideo, topVideo, newVideos }) => {
	return (
		<Layout title={'Главная страница'} description={''}>
			<Discover topVideo={topVideo} randomVideo={randomVideo} />
			<Catalog newVideos={newVideos} />
		</Layout>
	)
}
