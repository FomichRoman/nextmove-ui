import { onlyText } from '@/utils/meta/clear-text'
import Head from 'next/head'
import { useRouter } from 'next/router'
import { Children, FC, PropsWithChildren } from 'react'
import { ISeo } from './meta.interface'
import { titleMerge } from './seo.utils'


const Meta: FC<PropsWithChildren<ISeo>> = ({
  title,
  description,
  type = 'website',
  image = 'images/logo.svg',
  children
}) => {
  const {asPath} = useRouter()
  const currentUrl = `${process.env.APP_URL}${asPath}`
  return (
    <>
    <Head> 
      <title itemProp='headline'>{titleMerge(title)}</title>
      {description ? (
        <>
          <meta itemProp='description' name='description' content={onlyText(description, 152)} />
          <link ref='canonical' href={currentUrl} />
          <meta property='og:type' content={type} />
          <meta property='og:locale' content='ru' />
          <meta property='og:title' content={title} />
          <meta property='og:url' content={currentUrl} />
          <meta property='og:image' content={image || 'images/logo.svg'} />
          <meta property='og:site_name' content={process.env.APP_URL} />
          <meta property='og:description' content={onlyText(description, 197)} />
        </>
      ) : (
        <meta name='robots' content='noindex, nofollow' />
      )}
    </Head>
    {children}
    </>
  )
}



export default Meta