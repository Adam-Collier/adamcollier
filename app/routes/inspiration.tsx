import { MetaFunction, NavLink, Outlet } from 'remix'
import { NavLinkProps } from 'remix'

const Link = (props: NavLinkProps) => (
  <NavLink
    {...props}
    className={({ isActive }) =>
      isActive
        ? 'bg-gray-200 px-2 py-1 rounded text-sm'
        : 'px-2 py-1 rounded text-sm'
    }
  />
)

export function headers({}) {
  return {
    'Cache-Control': 's-maxage=1, stale-while-revalidate',
  }
}

export const meta: MetaFunction = () => {
  return {
    title: 'Adam Collier - Inspiration',
    description:
      'A space for visual references and quickly exploring inspiration imagery and website layouts. All takes from my Saave',
  }
}

const Inspiration = () => (
  <main className="bg-black">
    <Outlet />
    <nav className="fixed shadow-md bottom-20 left-1/2 -translate-x-1/2 sm:left-4 sm:translate-x-0">
      <ul className="flex px-2 py-2 bg-gray-100 rounded children:cursor-pointer">
        <li>
          <Link to="/inspiration/">All</Link>
        </li>
        <li>
          <Link to="/inspiration/desktop">Desktop</Link>
        </li>
        <li>
          <Link to="/inspiration/print">Print</Link>
        </li>
        <li>
          <Link to="/inspiration/3D">3D</Link>
        </li>
      </ul>
    </nav>
  </main>
)

export default Inspiration
