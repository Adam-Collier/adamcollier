import { NavLink, Outlet } from "remix"
import { NavLinkProps } from "remix"


const Link = (props: NavLinkProps) => (
  <NavLink {...props} className={({ isActive }) => isActive ? "bg-gray-200 px-2 py-1 rounded" : "px-2 py-1 rounded"} />
)

const Inspiration = () => {

  return <main>
    <Outlet />
    <nav className="fixed shadow-md bottom-24 left-8">
      <ul className="flex px-2 py-2 bg-gray-100 rounded children:cursor-pointer">
        <li><Link to="/inspiration">All</Link></li>
        <li><Link to="/inspiration/desktop">Desktop</Link></li>
        <li><Link to="/inspiration/print">Print</Link></li>
        <li><Link to="/inspiration/3D">3D</Link></li>
      </ul>
    </nav>
  </main>
}

export default Inspiration