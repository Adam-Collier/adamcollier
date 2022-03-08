import { Link } from 'remix'
import {
  Home,
  Posts,
  Snippets,
  Resources,
  Inspiration,
  Signout,
  Music,
} from '~/svgs'
import { useAuth } from '~/context'

export const Header = () => {
  const { user } = useAuth()

  return (
    <div className="flex fixed bottom-8 w-full mx-auto left-1/2 -translate-x-1/2 justify-center px-8 z-10">
      <ul className="flex justify-around items-center p-4 space-x-4 rounded-lg w-fit shadow-md z-10 bg-gray-200 bg-opacity-90 backdrop-filter backdrop-blur-sm">
        <li>
          <Link prefetch="intent" to="/" aria-label="Home">
            <Home />
          </Link>
        </li>
        <li>
          <Link prefetch="intent" to="/blog" aria-label="Blog">
            <Posts />
          </Link>
        </li>
        <li>
          <Link prefetch="intent" to="/snippets" aria-label="Snippets">
            <Snippets />
          </Link>
        </li>
        <li>
          <Link prefetch="intent" to="/resources" aria-label="Resources">
            <Resources />
          </Link>
        </li>
        <li>
          <Link prefetch="intent" to="/inspiration" aria-label="Inspiration">
            <Inspiration />
          </Link>
        </li>
        <li>
          <Link prefetch="intent" to="/music" aria-label="Music">
            <Music />
          </Link>
        </li>
        {user && (
          <li>
            <form action="/logout" method="post">
              <button className="block" type="submit" aria-label="Log out">
                <Signout />
              </button>
            </form>
          </li>
        )}
      </ul>
    </div>
  )
}
