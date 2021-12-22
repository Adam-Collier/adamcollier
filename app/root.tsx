import {
  Links,
  LiveReload,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
  useLoaderData
} from "remix";
import type { MetaFunction, LoaderFunction } from "remix";
import { getUser } from "~/utils/session.server";

import { Header } from "~/components/Header";

import styles from "~/styles/global.css";
import tailwind from "~/tailwind.css";

export const links = () => [{ rel: "stylesheet", href: styles }, { rel: "stylesheet", href: tailwind }];

export const meta: MetaFunction = () => {
  return { title: "New Remix App" };
};

export const loader: LoaderFunction = async ({ request }) => {
  const user = await getUser(request);
  const data = {
    user
  }

  return data;
}

export default function App() {
  const data = useLoaderData();

  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width,initial-scale=1" />
        <Meta />
        <Links />
      </head>
      <body>
        <Header isLoggedIn={data.user} />
        <Outlet />
        <ScrollRestoration />
        <Scripts />
        {process.env.NODE_ENV === "development" && <LiveReload />}
      </body>
    </html>
  );
}
