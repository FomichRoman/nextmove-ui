import { Layout } from '@/components/layout/Layout'
import { IVideo } from '@/types/video.interface'
import { useRouter } from 'next/router'
import { FC, useEffect } from 'react'
import VideoPlayer from './video-player/VideoPlayer'
import s from './Video.module.scss'
import cn from 'classnames'
import { videoApi } from '@/redux/api/video.api'
import Comments from './comments/Comments'
import VideoDetail from './video-detail/VideoDetail'
import { IUser } from '@/types/user.interface'

// interface IVideoPage {
//   video: IVideo
// }

const Video: FC = () => {
  const {query} = useRouter()

  const {data: video = {} as IVideo} = videoApi.useGetVideoByIdQuery(Number(query.id), { skip: !query?.id })

  const [updateViews] = videoApi.useUpdateViewsMutation()

  useEffect(() => {
    if (query.id) updateViews(Number(query.id))
  }, [query.id])
  return (
    <Layout title={video.name}>
      <div className={s.layout}>
        <VideoPlayer videoPath={video.videoPath} />
        <Comments videoId={video.id} comments={video.comments || []} />
      </div>
      <div className={cn(s.layout, 'mt-7')}>
        <VideoDetail video={video} channel={video.user || ({} as IUser)} />
        <div></div>
      </div>
    </Layout>
  )
}



export default Video