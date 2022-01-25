import { Outlet } from 'remix'

const adminLayout = () => (
  <main className="px-4 pt-8 pb-30">
    <Outlet />
  </main>
)

export default adminLayout
