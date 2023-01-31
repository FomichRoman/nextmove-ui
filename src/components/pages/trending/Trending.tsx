import { Layout } from '@/components/layout/Layout'
import { IVideo } from '@/types/video.interface'
import { FC } from 'react'
import Catalog from '../home/catalog/Catalog'


interface ITrending {
  topVideos: IVideo[]
}

const Trending: FC<ITrending> = ({ topVideos }) => {
  return (
    <Layout title={'Тренды'}>
      <Catalog newVideos={topVideos} />
    </Layout>
  )
}



export default Trending