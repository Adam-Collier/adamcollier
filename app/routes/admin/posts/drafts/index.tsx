import { Link, useOutletContext } from "@remix-run/react";
import type { Post } from '../drafts'

const Drafts = () => {
  const context = useOutletContext<Post[]>()

  if (context.length === 0) {
    return (
      <p>
        There are currently no drafts!{' '}
        <Link className="underline" to="/admin/posts/new">
          Create a New Post
        </Link>{' '}
        instead
      </p>
    )
  } else {
    return null
  }
}

export default Drafts
