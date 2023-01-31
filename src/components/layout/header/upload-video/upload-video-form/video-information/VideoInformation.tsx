import Image from 'next/image'
import Link from 'next/link'
import { FC } from 'react'
import s from './VideoInformation.module.scss'

interface IVideoInformation {
  thumbnailPath?: string
  videoId: number
  fileName: string
  isUploaded: boolean
}

const VideoInformation: FC<IVideoInformation> = ({
  videoId,
  thumbnailPath,
  fileName,
  isUploaded
}) => {
  return (
    <div className={s.info}>
      {!thumbnailPath ? (
        <div className={s.thumbnail}>
          {!isUploaded
            ? 'Идет загрузка превью...'
            : 'Ты должен загрузить превью' }
        </div>
      ) : (
        <Image src={thumbnailPath} width={344} height={190} alt={''} />
      )}
      <div className={s.datails}>
        <div className='mb-6'>
          <span className={s.desc}>Video Link:</span>
          <span>
            <Link href={`/v/${videoId}`}>http://local/v/{videoId}</Link>
          </span>
        </div>
        <div>
          <span className={s.desc}>Filename:</span>
          <span>{fileName}</span>
        </div>
      </div>
    </div>
  )
}



export default VideoInformation