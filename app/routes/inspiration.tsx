import { MetaFunction } from "@remix-run/cloudflare";
import { NavLink, NavLinkProps, Outlet } from "@remix-run/react";

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
  const title = 'Inspiration'
  const description =
    'A space for visual references and quickly exploring inspiration imagery and website layouts. All taken from my Saave'

  return {
    title,
    description,
    'twitter:title': title,
    'twitter:description': description,
  }
}

const Inspiration = () => (
  <main className="bg-black">
    <Outlet />
    <nav className="fixed shadow-md bottom-23 left-1/2 -translate-x-1/2">
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
