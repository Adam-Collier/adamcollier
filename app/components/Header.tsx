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
    <div className="flex fixed bottom-4 w-full mx-auto left-1/2 -translate-x-1/2 justify-center sm:justify-start px-4 z-10">
      <ul className="flex justify-around items-center p-4 space-x-4 rounded-md w-fit shadow-md z-10 bg-gray-200 bg-opacity-70 backdrop-filter backdrop-blur-sm">
        <li>
          <Link to="/">
            <Home />
          </Link>
        </li>
        <li>
          <Link to="/blog">
            <Posts />
          </Link>
        </li>
        <li>
          <Link to="/snippets">
            <Snippets />
          </Link>
        </li>
        <li>
          <Link to="/resources">
            <Resources />
          </Link>
        </li>
        <li>
          <Link to="/inspiration">
            <Inspiration />
          </Link>
        </li>
        <li>
          <Link to="/music">
            <Music />
          </Link>
        </li>
        {user && (
          <form action="/logout" method="post">
            <button className="block" type="submit">
              <Signout />
            </button>
          </form>
        )}
      </ul>
    </div>
  )
}
