import type { AppProps } from 'next/app'
import '../styles/style.css'
import { queryClient } from '../src/services/queryClient'
import { QueryClientProvider } from 'react-query'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <QueryClientProvider client={queryClient}>
      <Component {...pageProps} />
    </QueryClientProvider>
  )
}

export default MyApp
