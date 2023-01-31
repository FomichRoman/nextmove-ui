import { AuthForm } from '../auth-form/AuthForm'
import { ProfileMenu } from '../profile-menu/ProfileMenu'
import { UploadVideo } from '../upload-video/UploadVideo'
import s from './iconsright.module.scss'
import { useAuth } from '@/hooks/useAuth'

export const IconsRight = () => {
	const { user } = useAuth()
	return (
		<div className={s.icons}>
			{user ? (
				<>
					<ProfileMenu />
					<UploadVideo />
				</>
			) : (
				<AuthForm />
			)}
		</div>
	)
}
