import { VideoDuration } from './VideoDuration'
import s from './VideoItem.module.scss'
import { IVideoItem } from './video-item.interface'
import cn from 'classnames'
import Image from 'next/image'
import Link from 'next/link'
import { useRouter } from 'next/router'
import { FC } from 'react'
import { BiEdit, BiTrash } from 'react-icons/bi'
import { VideoStatistics } from './VideoStatistics'
import UserAvatar from '@/ui/user-avatar/UserAvatar'

const VideoItem: FC<IVideoItem> = ({
	isSmall,
	item,
	isUpdateLink,
	removeHandler
}) => {
	const { push } = useRouter()

	return (
		<div
			className={cn(s.video_item, {
				[s.small]: isSmall
			})}
		>
			{!!removeHandler && (
				<button
					className={'absolute bottom-3 right-3 z-10'}
					onClick={() => removeHandler(item.id)}
				>
					<BiTrash className='text-lg text-red-700' />
				</button>
			)}
			{isUpdateLink && (
				<button
					className={'absolute bottom-3 right-11 z-10'}
					onClick={() => push(`/video/edit/${item.id}`)}
				>
					<BiEdit className='text-lg text-blue-600' />
				</button>
			)}
			<div className={s.thumbnail}>
				{item.thumbnailPath && (
					<Image
						src={item.thumbnailPath}
						alt={item.name}
						width={185}
						height={103}	
						priority
					/>
				)}
				<VideoDuration duration={item.duration} />
				{item?.user?.avatarPath && (
					<div className="absolute right-3 -bottom-7">
						<UserAvatar user={item.user} />
					</div>
				)}
			</div>
			<div className={s.information}>
				{!isSmall && <div className={s.author}>{item.user?.name}</div>}
				<Link href={`/v/${item.id}`} className={s.name}>
					{item.name}
				</Link>
        <VideoStatistics views={item.views} createdAt={!isSmall ? item.createdAt : undefined} />
			</div>
		</div>
	)
}

export default VideoItem
