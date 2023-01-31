import s from './UserAvatar.module.scss'
import { IUser } from '@/types/user.interface'
import cn from 'classnames'
import Image from 'next/image'
import Link from 'next/link'
import { FC } from 'react'
import { IoIosCheckmarkCircle } from 'react-icons/io'

const UserAvatar: FC<{ user: IUser; isWhite?: boolean }> = ({
	user,
	isWhite
}) => {
	return (
		<Link href={`/c/${user.id}`}>
			<span className={cn(s.avatar, { [s.white]: isWhite })}>
				<Image
					width={45}
					height={45}
					alt={user.name}
					src={user.avatarPath || ''}
				/>
        {user.isVerifiend && (
          <span className={s.isVerified}>
            <IoIosCheckmarkCircle />
          </span>
        )}
			</span>
		</Link>
	)
}

export default UserAvatar
