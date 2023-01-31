import { VideoDuration } from './VideoDuration'
import s from './VideoItem.module.scss'
import { IVideo } from '@/types/video.interface'
import cn from 'classnames'
import Image from 'next/image'
import Link from 'next/link'
import { FC } from 'react'

const LargeVideoItem: FC<{ video: IVideo }> = ({ video }) => {
	return (
		<div className={cn(s.video_item, s.large_item)}>
			<div className={s.thumbnail}>
				{video.thumbnailPath && (
					<Image
						src={video.thumbnailPath}
						alt={video.name}
						fill
						className={s['bg-image']}
						priority
					/>
				)}
				<VideoDuration isBottom duration={video.duration} />
				<div className={s.information}>
					<Link href={`/v/${video.id}`} className={s.name}>
						{video.name}
					</Link>
				</div>
			</div>
		</div>
	)
}

export default LargeVideoItem
