import { LoaderFunction, MetaFunction } from "@remix-run/cloudflare";
import { Outlet } from "@remix-run/react";
import { NavSpacer } from '~/components/NavSpacer'
import { getUser } from '~/utils/session.server'

export const meta: MetaFunction = () => {
  return {
    robots: 'noindex, nofollow',
  }
}

export const loader: LoaderFunction = async ({ request }) => {
  const isAuthenticated = await getUser(request)
  if (!isAuthenticated) throw new Response('Unauthorized', { status: 401 })

  return null
}

const adminLayout = () => (
  <main className="px-4 pt-8">
    <Outlet />
    <NavSpacer />
  </main>
)

export default adminLayout
