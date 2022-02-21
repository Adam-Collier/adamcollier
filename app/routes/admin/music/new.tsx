import { NavLink, Outlet } from 'remix'
import { NavLinkProps } from 'remix'

const Link = (props: NavLinkProps) => (
  <NavLink
    {...props}
    className={({ isActive }) =>
      isActive
        ? 'block bg-gray-200 px-2 py-1 rounded text-sm'
        : 'block px-2 py-1 rounded text-sm'
    }
  />
)

const NewMusic = () => {
  return (
    <main className="flex flex-col sm:flex-row gap-8 sm:gap-16 block max-w-4xl mx-auto min-h-[100vh]">
      <div className="sm:flex-shrink-0">
        <ul className="flex sm:flex-col gap-2 md:gap-4">
          <li>
            <Link to="spotify">Spotify</Link>
          </li>
          <li>
            <Link to="soundcloud">SoundCloud</Link>
          </li>
          <li>
            <Link to="radio">Radio</Link>
          </li>
        </ul>
      </div>
      <Outlet />
    </main>
  )
}

export default NewMusic
