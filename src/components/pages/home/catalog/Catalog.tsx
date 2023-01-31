import { IVideo } from '@/types/video.interface'
import { FC } from 'react'
import Heading from '@/ui/heading/Heading'
import VideoItem from '@/ui/video-item/VideoItem'
import s from './Catalog.module.scss'

interface ICatalog {
  newVideos: IVideo[]
  removeHandler?: (videoId: number) => void
  isUpdateLink?: boolean
}

const Catalog: FC<ICatalog> = ({ newVideos, removeHandler, isUpdateLink }) => {
  return (
    <div className={s.recommended}>
      <div className={s.top_block}>
        <Heading title={removeHandler ? 'Мои видео' : 'Рекомендации'} />
      </div>

      <div className={s.catalog}>
        {newVideos.map(video => (
          <VideoItem item={video} key={video.id} removeHandler={removeHandler} isUpdateLink={isUpdateLink} />
        ))}
      </div>
    </div>
  )
}



export default Catalog