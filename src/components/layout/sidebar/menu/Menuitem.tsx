import { useAuth } from '@/hooks/useAuth'
import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { IMenuItem } from './menu.interface'
import s from './menu.module.scss'


export const Menuitem = ({ title, link, Icon, image }: IMenuItem) => {
  const { user } = useAuth();
  const { asPath } = useRouter();

  if (link === '/my-channel') 
    if (!user) return null
    else link = `/c/${user?.id}`

  return (
    <li>
      <Link href={link} className={asPath === link ? s.active : ''}>
        <span className={image ? s.image : ''}>
          {Icon && <Icon />}
          {image && <Image src={image} width={40} height={40} alt={title} />}
        </span>
        <b>{title}</b>
      </Link>
    </li>
  )
}