import { Link, LoaderFunction, Outlet } from "remix"
import { getUser } from "~/utils/session.server";

export const loader: LoaderFunction = async ({ request }) => {
  const isAuthenticated = await getUser(request)
  if (!isAuthenticated) throw new Response("Unauthorized", { status: 401 });
}

const NewMusic = () => {
  return (
    <main className="flex flex-col sm:flex-row gap-8 md:gap-16 block max-w-4xl mx-auto px-4">
      <div className="md:flex-shrink-0 pt-16">
        <ul className="flex flex-col gap-4">
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