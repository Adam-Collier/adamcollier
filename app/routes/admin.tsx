import { MetaFunction, Outlet } from 'remix'

export const meta: MetaFunction = () => {
  return {
    robots: 'noindex, nofollow',
  }
}

const adminLayout = () => (
  <main className="px-4 pt-8 pb-30">
    <Outlet />
  </main>
)

export default adminLayout
