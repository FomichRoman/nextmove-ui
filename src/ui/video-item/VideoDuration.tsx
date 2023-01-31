import s from './VideoItem.module.scss'

export const VideoDuration = ({
	duration,
	isBottom
}: {
	duration: number
	isBottom?: boolean
}) => {
	return <time className={isBottom ? s.bottom : ''}>{duration} мин.</time>
}
