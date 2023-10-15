import './globals.css'
import { Inter } from 'next/font/google'
import Provider from 'components/Provider'
import Nav from 'components/Nav'
import { ToastContainer } from 'react-toastify';

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Tim\'s Notes App',
  description: 'Make and share your notes!',
}

export default function RootLayout({ children }) {
  return (
    <html data-theme="light" lang="en">
      <body className={inter.className}>
        <ToastContainer />
        <Provider>
          <main>
            <Nav />
            {children}
          </main>
        </Provider>
      </body>
    </html>
  )
}
