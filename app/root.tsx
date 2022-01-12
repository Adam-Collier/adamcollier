import {
  Links,
  LiveReload,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
} from 'remix'
import type { MetaFunction } from 'remix'
import { AuthProvider } from '~/context'

import { Header } from '~/components/Header'

import reset from '@unocss/reset/tailwind.css'
import styles from '~/styles/global.css'
import unocss from '~/styles/uno.css'

export const links = () => [
  { rel: 'stylesheet', href: reset },
  { rel: 'stylesheet', href: styles },
  { rel: 'stylesheet', href: unocss },
]

export const meta: MetaFunction = () => {
  return { title: 'New Remix App' }
}

export default function App() {
  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width,initial-scale=1" />
        <Meta />
        <Links />
      </head>
      <body>
        <AuthProvider>
          <Header />
          <Outlet />
        </AuthProvider>
        <ScrollRestoration />
        <Scripts />
        {process.env.NODE_ENV === 'development' && <LiveReload />}
      </body>
    </html>
  )
}
