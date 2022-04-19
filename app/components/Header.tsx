import { Link, LinkProps, useLocation } from "@remix-run/react";
import {
  Home,
  Posts,
  Snippets,
  Resources,
  Inspiration,
  Signout,
  Music,
  Twitter,
} from '~/svgs'
import { useAuth } from '~/context'

const NavLink = (props: LinkProps) => {
  const location = useLocation()

  const toProp = props.to as string

  const activeClass =
    // cover all matching cases inc homepage
    location.pathname === props.to ||
    // check the length is greater than one to remove the homepage being grouped in
    // then check if the location starts with the to prop value
    (toProp.length > 1 && location.pathname.startsWith(toProp as string))
      ? ''
      : 'hidden'

  return (
    <Link {...props} className="relative block">
      {props.children}
      <span
        className={[
          activeClass,
          'bg-black absolute -bottom-1.5 left-1/2 -translate-x-1/2 h-1 w-1 rounded-lg',
        ].join('')}
      ></span>
    </Link>
  )
}

export const Header = () => {
  const { user } = useAuth()

  return (
    <div className="flex fixed bottom-8 w-full mx-auto left-1/2 -translate-x-1/2 justify-center px-8 z-10">
      <ul className="flex justify-around items-center p-4 space-x-3 sm:space-x-4 rounded-lg w-fit shadow-md z-10 bg-gray-200 bg-opacity-90 backdrop-filter backdrop-blur-sm">
        <li>
          <NavLink prefetch="intent" to="/" aria-label="Home">
            <Home />
          </NavLink>
        </li>
        <li>
          <NavLink prefetch="intent" to="/blog" aria-label="Blog">
            <Posts />
          </NavLink>
        </li>
        <li>
          <NavLink prefetch="intent" to="/snippets" aria-label="Snippets">
            <Snippets />
          </NavLink>
        </li>
        <li>
          <NavLink prefetch="intent" to="/resources" aria-label="Resources">
            <Resources />
          </NavLink>
        </li>
        <li>
          <NavLink prefetch="intent" to="/inspiration" aria-label="Inspiration">
            <Inspiration />
          </NavLink>
        </li>
        <li>
          <NavLink prefetch="intent" to="/music" aria-label="Music">
            <Music />
          </NavLink>
        </li>
        <li className="w-[1px] h-[20px] bg-zinc-400"></li>
        {user ? (
          <li>
            <form action="/logout" method="post">
              <button className="block" type="submit" aria-label="Log out">
                <Signout />
              </button>
            </form>
          </li>
        ) : (
          <li>
            <a
              href="https://twitter.com/CollierAdam"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Twitter />
            </a>
          </li>
        )}
      </ul>
    </div>
  )
}
