import type { ActionFunction, LoaderFunction } from "@remix-run/node";
import { redirect } from "@remix-run/node";
import { getUser } from '~/utils/session.server'

export const action: ActionFunction = async ({ request }) => {
  const user = await getUser(request)
  return user
}

export const loader: LoaderFunction = async () => {
  return redirect('/')
}
