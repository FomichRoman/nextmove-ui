import s from './VideoItem.module.scss'
import { formatNumberToK } from '@/utils/forman-number-to-l.utils'
import dayjs from 'dayjs'
import relativeTime from 'dayjs/plugin/relativeTime'
import 'dayjs/locale/ru'

interface IVideoStatistics {
	views: number
	createdAt?: number
}

dayjs.extend(relativeTime)
dayjs.locale('ru')

export const VideoStatistics = ({ views, createdAt }: IVideoStatistics) => {
	return (
		<div className={s.number_info}>
			<div className={s.views}>{formatNumberToK(views)} <span>просмотров</span></div>
			{!!createdAt && (
				<>
					<div className='mx-2'>.</div>
					<div className={s.date}>{dayjs(new Date(createdAt)).fromNow()}</div>
				</>
			)}
		</div>
	)
}
