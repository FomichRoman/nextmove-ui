import '../src/styles/globals.scss'
import { AuthProvider } from '@/src/providers/AuthProvider'
import { TypeComponentAuthFields } from '@/src/providers/private-route.interface'
import { persistor, store } from '@/src/redux/store'
import NextProgressBar from 'nextjs-progressbar'
import { Provider } from 'react-redux'
import ReduxToastrLib from 'react-redux-toastr'
import { PersistGate } from 'redux-persist/integration/react'
import { QueryClient, QueryClientProvider } from 'react-query'
import localFont from '@next/font/local'
import { AppProps } from 'next/app'

const ubuntu = localFont({
  src: [
    {
      path: '../public/fonts/Ubuntu-Regular.woff2',
      weight: '400',
      style: 'normal',
    },
    {
      path: '../public/fonts/Ubuntu-Medium.woff2',
      weight: '500',
      style: '<normal></normal>',
    },
    {
      path: '../public/fonts/Ubuntu-Bold.woff2',
      weight: '700',
      style: 'normal',
    },
  ],
})

type TypeAppProps = AppProps & TypeComponentAuthFields

const queryClient = new QueryClient()

export default function App({ Component, pageProps }: TypeAppProps) {
	return (
		<QueryClientProvider client={queryClient}>
			<NextProgressBar
				color='#ff7652'
				startPosition={0.3}
				stopDelayMs={200}
				height={3}
			/>
			<Provider store={store}>
				<PersistGate persistor={persistor} loading={null}>
					<main className={ubuntu.className}>
						<AuthProvider Component={Component}>
								<Component {...pageProps} />
								<ReduxToastrLib
									newestOnTop={false}
									preventDuplicates
									progressBar
									closeOnToastrClick
									timeOut={4000}
									transitionIn='fadeIn'
									transitionOut='fadeOut'
								/>
						</AuthProvider>
					</main>
				</PersistGate>
			</Provider>
		</QueryClientProvider>
	)
}
