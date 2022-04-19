import { Link } from "@remix-run/react";
import AdminToolbar from '~/components/AdminToolbar'
import { useAuth } from '~/context'

const Blog = () => {
  const { user } = useAuth()

  return (
    <>
      <AdminToolbar user={user}>
        <Link to={`/admin/posts/new`}>Create New Post</Link>
        <Link to={`/admin/posts/drafts`}>Drafts</Link>
      </AdminToolbar>
      <div className=" hidden mr-auto bg-gradient-to-t from-red-400 to-amber-100 rounded sm:rounded-xl sm:flex justify-center items-center w-full p-8 flex-col space-y-2 sm:space-y-4 noise text-center">
        <h1 className="text-2xl sm:text-5xl text-white">Welcome to the blog</h1>
        <p className="text-base sm:text-xl text-white max-w-md font-semibold">
          I hope you enjoy reading what I write and learn something a long the
          way
        </p>
      </div>
    </>
  )
}

export default Blog
