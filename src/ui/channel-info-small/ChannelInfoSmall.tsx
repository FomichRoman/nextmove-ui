import s from './ChannelInfoSmall.module.scss'
import { IUser } from '@/types/user.interface'
import { formatNumberToK } from '@/utils/forman-number-to-l.utils'
import { FC } from 'react'
import UserAvatar from '@/ui/user-avatar/UserAvatar'

interface IChannelInfoSmall {
	channel: IUser
	message?: string
}

const ChannelInfoSmall: FC<IChannelInfoSmall> = ({ channel, message }) => {
	return (
		<div className={s.profile_info}>
			{channel.avatarPath && <UserAvatar user={channel} />}

			<div>
				<div className={s.name}>{channel.name}</div>
				<div>
					{message ||
						formatNumberToK(channel.subscribersCount) + ' подписчиков'}
				</div>
			</div>
		</div>
	)
}

export default ChannelInfoSmall
