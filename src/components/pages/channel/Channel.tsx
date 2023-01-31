import { Layout } from '@/components/layout/Layout'
import { FC } from 'react'
import ChannelInfoSmall from '@/ui/channel-info-small/ChannelInfoSmall'
import SubscribeButton from '@/ui/subscribe-button/SubscribeButton'
import Catalog from '../home/catalog/Catalog'
import { IChannel } from './channel.interface'


const Channel: FC<IChannel> = ({ channel }) => {
  return (
    <Layout title={channel.name}>
      <div className='mb-10 w-1/3'>
        <div className='flex items-center gap-10'>
          <ChannelInfoSmall channel={channel} />
          <SubscribeButton channelIdForSubscribe={channel.id} />
        </div>
        <article className='text-gray-500 mt-3'>{channel.description}</article>
      </div>
      <Catalog newVideos={channel.videos || []}  />
    </Layout>
  )
}



export default Channel