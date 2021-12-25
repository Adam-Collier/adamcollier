import { json, useActionData } from "remix";
import type { ActionFunction } from "remix";
import { login, createUserSession } from "~/utils/session.server"
import { Form, TextInput } from "~/components/Form"

type ActionData = {
	formError?: string;
};

// if a bad request is made send back some data and a 400 status
const badRequest = (data: ActionData) =>
	json(data, { status: 400 });

export const action: ActionFunction = async ({ request }) => {
	const form = await request.formData();
	const username = form.get("username");
	const password = form.get("password");

	// if for some reason the username and password aren't a string return a badRequest
	if (
		typeof username !== "string" ||
		typeof password !== "string"
	) {
		return badRequest({
			formError: `Form not submitted correctly.`
		});
	}

	// check the username and password
	// if login is successful we will get a user back otherwise we will get null
	const user = await login({ username, password });

	// if there is no user return a formError
	if (!user) {
		return badRequest({
			formError: `Username/Password combination is incorrect`
		});
	}

	// if we have a user create the session
	return createUserSession(user.id, "/")
}

const Login = () => {
	const actionData = useActionData<ActionData>();

	return (<main className="noise w-full h-full flex justify-center items-center bg-gradient-to-t from-neutral-50 to-rose-50">
		<Form reloadDocument method="post" className="max-w-sm w-full">
			<TextInput id="username-input" name="username" label="Username" />
			<TextInput id="password-input" name="password" label="Password" />
			<button className="btn" type="submit">Submit</button>
			{actionData?.formError ? (<div id="form-error-message">
				<p
					className="text-xs text-red-500 bg-red-100 py-2 px-3 rounded"
					role="alert"
				>
					{actionData?.formError}
				</p>
			</div>
			) : null}
		</Form>
	</main>)
}

export default Login;