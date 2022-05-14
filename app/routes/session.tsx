import type { ActionFunction, LoaderFunction } from "@remix-run/cloudflare";
import { redirect } from "@remix-run/cloudflare";
import { getUser } from '~/utils/session.server'

export const action: ActionFunction = async ({ request }) => {
  const user = await getUser(request)
  return user
}

export const loader: LoaderFunction = async () => {
  return redirect('/')
}
