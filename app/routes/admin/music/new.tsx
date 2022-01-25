import { LoaderFunction, NavLink, Outlet } from 'remix'
import { getUser } from '~/utils/session.server'
import { NavLinkProps } from 'remix'

export const loader: LoaderFunction = async ({ request }) => {
  const isAuthenticated = await getUser(request)
  if (!isAuthenticated) throw new Response('Unauthorized', { status: 401 })

  return null
}

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
    <main className="flex flex-col sm:flex-row sm:gap-8 md:gap-16 block max-w-4xl mx-auto min-h-[100vh] bg-gradient-to-t">
      <div className="md:flex-shrink-0">
        <ul className="flex md:flex-col gap-2 md:gap-4 pl-8 sm:pl-0">
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
