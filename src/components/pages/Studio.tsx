import { api } from '@/redux/api/api'
import { videoApi } from '@/redux/api/video.api'
import { FC } from 'react'
import Loader from '@/ui/loader/Loader'
import { Layout } from '../layout/Layout'
import Catalog from './home/catalog/Catalog'
import s from './Studio.module.scss'


const Studio: FC = () => {
  const { data, isLoading } = api.useGetProfileQuery(null)
  const [removeVideo] = videoApi.useDeleteVideoMutation()

  const videos = data?.videos
  return (
    <Layout title='Видеохостинг 2.0 studio' >
      <div>
        {isLoading ? (
          <Loader count={5} />
        ) : videos?.length ? (
          <Catalog newVideos={videos} removeHandler={removeVideo} isUpdateLink />
        ) : (
          <p>Видео не найдено!</p>
        )}
      </div>
    </Layout>
  )
}



export default Studio