import { videoApi } from '@/redux/api/video.api'
import { IUser } from '@/types/user.interface'
import { IVideo } from '@/types/video.interface'
import { FC } from 'react'
import ChannelInfoSmall from '@/ui/channel-info-small/ChannelInfoSmall'
import SubscribeButton from '@/ui/subscribe-button/SubscribeButton'
import s from './VideoDetail.module.scss'
import { RiHeart2Fill } from 'react-icons/ri'
import { IoEyeSharp } from 'react-icons/io5'
import { formatNumberToK } from '@/utils/forman-number-to-l.utils'
import { HiCalendar } from 'react-icons/hi'
import dayjs from 'dayjs'

interface IVideoDetail {
  video: IVideo
  channel: IUser
}

const VideoDetail: FC<IVideoDetail> = ({ video, channel }) => {
  const [updateLike, { isLoading: isLikeLoading }] = videoApi.useUpdateLikesMutation()
  return (
    <div className={s.detail}>
      <div>
        <ChannelInfoSmall channel={channel} />
        <h1>{video.name}</h1>
        <article className={s.article}>{video.description}</article>
      </div>
      <div className='pt-2'>
        <div className={s.wrapper_button}>
          {video.user?.id && (
            <SubscribeButton channelIdForSubscribe={video.user.id} />
          )}
          <button className={s.likeButton} disabled={isLikeLoading} onClick={() => updateLike(video.id)}>
            <RiHeart2Fill />
            Лайк
          </button>
        </div>

        <div className={s.number_info}>
          <div>
            <IoEyeSharp />
            <span>{formatNumberToK(video.views)} просмотров</span>
          </div>
          <div>
            <RiHeart2Fill />
            <span>{formatNumberToK(video.likes)} лайков</span>
          </div>
          <div>
            <HiCalendar />
            <span>{dayjs(new Date(video.createdAt)).fromNow()}</span>
          </div>

        </div>
      </div>
    </div>
  )
}



export default VideoDetail