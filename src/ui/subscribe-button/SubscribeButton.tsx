import s from './SubscribeButton.module.scss'
import { useAuth } from '@/hooks/useAuth'
import { api } from '@/redux/api/api'
import cn from 'classnames'
import { FC } from 'react'
import { BsPersonPlusFill } from 'react-icons/bs'

interface ISubscribeButton {
	channelIdForSubscribe: number
}

const SubscribeButton: FC<ISubscribeButton> = ({ channelIdForSubscribe }) => {
	const { user } = useAuth()

	const { data: profile } = api.useGetProfileQuery(null, {
		skip: !user
	})

	const [subscribe, { isLoading, data }] = api.useSubsribeToChannelMutation()

	if (user?.id === channelIdForSubscribe) return null

	const isSubscribed =
		profile?.subscriptions?.some(
			sub => sub.toChannel.id === channelIdForSubscribe
		) || !!data

	return (
		<button
			className={cn(s.button, { [s.subscribed]: isSubscribed })}
			onClick={() => subscribe(channelIdForSubscribe).unwrap()}
      disabled={isLoading}
		>
			<BsPersonPlusFill />
			{isSubscribed ? 'Уже подписан' : 'Подписаться'}
		</button>
	)
}

export default SubscribeButton
