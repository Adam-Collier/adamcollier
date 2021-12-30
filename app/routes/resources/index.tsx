import { LoaderFunction, json, useLoaderData } from "remix";
import { db } from "~/utils/db.server";
import { useAuth } from "~/context";
import { Resource as ResourceProps } from "@prisma/client";
import Resource from "~/components/Resource";

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
			{data.map((props: ResourceProps) => (
				<Resource user={user} {...props} />
			))}
		</main>
	);
};

export default Resources;
