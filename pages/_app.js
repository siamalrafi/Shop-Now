import Layout from '@/components/Layout'
import AuthProvider from '@/Context/AuthProvider'
import '@/styles/globals.css'
import { Toaster } from 'react-hot-toast'

export default function App({ Component, pageProps }) {
  return (
    <AuthProvider>
      <Layout>
        <Toaster />
        <Component {...pageProps} />
      </Layout>
    </AuthProvider>
  )
}
