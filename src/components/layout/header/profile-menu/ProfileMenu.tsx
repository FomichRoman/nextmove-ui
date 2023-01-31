import s from './profilemenu.module.scss'
import { useActions } from '@/hooks/useActions'
import { useAuth } from '@/hooks/useAuth'
import { useOutside } from '@/hooks/useOutside'
import { api } from '@/redux/api/api'
import Image from 'next/image'
import { GoChevronUp, GoChevronDown } from 'react-icons/go'
import Link from 'next/link'

export const ProfileMenu = () => {
	const { user } = useAuth()
	const { data, isLoading } = api.useGetProfileQuery(null, {
		skip: !user
	})


	const { isShow, setIsShow, ref } = useOutside(false)

	const { logout } = useActions()

	if (isLoading) return null

	return (
		<div ref={ref} className={s.wrapper}>
			<button onClick={() => setIsShow(!isShow)}>
				<Image
					src={data?.avatarPath || ''}
					alt={data?.name || 'dsfd'}
					width={40}
					height={40}
					priority
				/>
        <span className={s.name}>{data?.name}</span>
        {isShow ? <GoChevronUp /> : <GoChevronDown />}
			</button>

      {isShow && (
        <div className={s['profile-menu']}>
          <ul>
            <li>
              <Link href={`/c/${user?.id}`}>
                Мой канал
              </Link>
            </li>
            <li>
              <Link href={`/studio`}>
                В студию
              </Link>
            </li>
            <li>
              <button onClick={logout}>
                Выйти
              </button>
            </li>
          </ul>
        </div>
      )}
		</div>
	)
}
