import { createCookieSessionStorage, redirect } from "@remix-run/node";

type LoginForm = {
  username: string
  password: string
}

// this is our main login function which returns a user
// if the username or password is not correct we return null
export const login = async ({ username, password }: LoginForm) => {
  if (username === process.env.USERNAME && password === process.env.PASSWORD) {
    return { id: '1' }
  }
  // if the values dont match we return null
  return null
}

// create the sessionSecret which will be passed to our cookie
const sessionSecret = process.env.SESSION_SECRET
// if there is no session secret we throw an error
if (!sessionSecret) {
  throw new Error('SESSION_SECRET must be set')
}

// remix makes creating and setting cookies and sessions easy with createCookieSessionStorage
const storage = createCookieSessionStorage({
  cookie: {
    // this can be whatever we want
    name: 'a_sessiontastic_session',
    // normally you want this to be `secure: true`
    // but that doesn't work on localhost for Safari
    // https://web.dev/when-to-use-local-https/
    secure: process.env.NODE_ENV === 'production',
    secrets: [sessionSecret],
    sameSite: 'lax',
    path: '/',
    maxAge: 60 * 60 * 24 * 30,
    httpOnly: true,
  },
})

export async function createUserSession(userId: string, redirectTo: string) {
  // first we grab the current session
  const session = await storage.getSession()
  // then we set our user id to identify the user session
  session.set('userId', userId)
  // once we have set the user id we can redirect to wherever
  return redirect(redirectTo, {
    headers: {
      'Set-Cookie': await storage.commitSession(session),
    },
  })
}

// we need the ability to be able to logout
// we can create a simple function to handle that
export async function logout(request: Request) {
  // get the current session from the browser headers sent from the client
  const session = await storage.getSession(request.headers.get('Cookie'))
  // destroy the session in the cookie, send back and redirect
  return redirect('/', {
    headers: {
      'Set-Cookie': await storage.destroySession(session),
    },
  })
}

export const getUserSession = async (request: Request) => {
  // grab and return the current session from the request headers
  return storage.getSession(request.headers.get('Cookie'))
}

// grab the user id
export const getUser = async (request: Request) => {
  // grab the user session
  const session = await getUserSession(request)
  // check there is a userId associated with the session
  const userId = session.get('userId')
  // if there is no userId we will return null
  if (!userId || typeof userId !== 'string') return null
  // if we are all good we return the userId
  return userId
}
