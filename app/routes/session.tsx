import type { ActionFunction, LoaderFunction } from "remix";
import { redirect } from "remix";
import { getUser } from "~/utils/session.server";

export const action: ActionFunction = async ({
	request
}) => {
	const user = await getUser(request)
	return user;
};

export const loader: LoaderFunction = async () => {
	return redirect("/");
};