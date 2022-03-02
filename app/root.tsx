import {
  ErrorBoundaryComponent,
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
  const title = 'Adam Collier'
  const description =
    'Adam Collier is a Creative UX Designer Developer from Manchester, UK. Creating content to come back to. Discover useful snippets, resources and blogposts.'
  const image = 'https://adamcollier.co.uk/img/social.jpg'
  return {
    title,
    description,
    // facebook
    'og:type': 'website',
    'og:url': 'https://www.adamcollier.co.uk/',
    'og:title': title,
    'og:description': description,
    'og:image': image,
    // twitter
    'twitter:image': image,
    'twitter:card': 'summary_large_image',
    'twitter:creator': '@CollierAdam',
    'twitter:site': '@CollierAdam',
    'twitter:title': title,
    'twitter:description': description,
  }
}

export default function App() {
  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width,initial-scale=1" />
        {process.env.NODE_ENV === 'production' && (
          <script
            async
            defer
            data-website-id="5e5ce6b5-3fb0-49eb-ae22-ab3cb1fa483b"
            src="https://umami-production-7v-m.up.railway.app/umami.js"
          />
        )}
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
        <LiveReload />
      </body>
    </html>
  )
}

export const ErrorBoundary: ErrorBoundaryComponent = ({ error }) => {
  return (
    <html>
      <head>
        <title>Oh no!</title>
        <Meta />
        <Links />
      </head>
      <body>
        <div className="w-full h-full flex flex-col justify-center items-center">
          <AuthProvider>
            <Header />
            <h1 className="text-lg sm:text-2xl">
              Oh no! There's been an error!
            </h1>
            <h2>Try reloading the page</h2>
          </AuthProvider>
        </div>
        <Scripts />
      </body>
    </html>
  )
}
