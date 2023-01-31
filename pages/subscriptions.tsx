import { Layout } from "@/components/layout/Layout"
import { Menu } from "@/components/layout/sidebar/menu/Menu"
import { NextPageAuth } from "@/providers/private-route.interface"
import { api } from "@/redux/api/api"

const SubscriptionsPage: NextPageAuth = () => {
  const {data} = api.useGetProfileQuery(null)
	return (
  <Layout title={'Мои подписчики'}>
    <Menu title={'Мои подписчики'} items={data?.subscriptions.map(({toChannel}) => ({
      title: toChannel.name,
      image: toChannel.avatarPath,
      link: `/c/${toChannel.id}`
    })) || []
    } />
  </Layout>)
}

SubscriptionsPage.isOnlyUser = true

export default SubscriptionsPage