import type { AppProps } from 'next/app'

import AppProvider from '@/lib/context'
 
export default function MyApp({ Component, pageProps }: AppProps) {
  return <AppProvider><Component {...pageProps} /> </AppProvider>
}