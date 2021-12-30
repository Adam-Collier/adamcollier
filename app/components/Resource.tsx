import { Link } from "remix"
import { Resource } from "@prisma/client"

interface ResourceProps extends Resource {
  user: string | null
}

const Resource = ({ id, link, title, summary, description, user }: ResourceProps) => (
  <div key={id} className="grid grid-cols-[140px,1fr] md:grid-cols-[200px,1fr]">
    <div>
      <a href={link} target="_blank" rel="noopener noreferrer" className="hover:underline text-indigo-600">
        <p className="font-semibold">{title}</p>
      </a>
      <p className="text-sm text-gray-400">
        {summary}
      </p>
      {user &&
        <Link to={`/admin/resources/edit/${id}`} className="hover:underline"><i className="text-sm flex items-center gap-1 hover:underline">edit <span className="inline-block i-ri:arrow-right-line" /></i></Link>
      }
    </div>
    <div className="href:text-indigo-500 href:underline" dangerouslySetInnerHTML={{ __html: description }} />
  </div>
)

export default Resource