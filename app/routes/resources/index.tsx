import { LoaderFunction, json, useLoaderData, HeadersFunction, Link } from "remix";
import { db } from "~/utils/db.server";
import { useAuth } from "~/context";

type Resource = {
	id: number,
	title: string,
	description: string,
	link: string,
	summary: string,
}

export const loader: LoaderFunction = async () => {
	const latestResources = await db.resource.findMany({
		take: 5,
		select: {
			id: true,
			title: true,
			description: true,
			link: true,
			summary: true,
		},
		orderBy: [
			{
				updatedAt: "desc",
			},
		],
	});

	return json(latestResources);
};

const Resources = () => {
	const data = useLoaderData();
	const { user } = useAuth();

	return (
		<main className="flex flex-col gap-4">
			<h2 className="text-2xl">Resources</h2>
			<p>
				This is a group of resources I have either learned something from or
				thought could become useful in the future.
			</p>
			<h3 className="text-xl">Latest Resources</h3>
			{data.map(({ id, link, title, summary, description }: Resource) => (
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
					<div className="href:text-indigo-500" dangerouslySetInnerHTML={{ __html: description }} />
				</div>
			))}
		</main>
	);
};

export default Resources;
