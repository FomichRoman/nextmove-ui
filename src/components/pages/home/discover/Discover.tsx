import { IVideo } from '@/types/video.interface'
import { FC } from 'react'
import LargeVideoItem from '@/ui/video-item/LargeVideoItem'
import s from './Discover.module.scss'

interface IDiscover {
  topVideo: IVideo
  randomVideo: IVideo
}

const Discover: FC<IDiscover> = ({ topVideo, randomVideo }) => {
  return (
    <div className={s.discover}>
      <div className={s.top_video}>
        <LargeVideoItem video={topVideo} />
      </div>

      <div className={s.random_video}>
        <LargeVideoItem video={randomVideo} />
      </div>
    </div>
  )
}



export default Discover