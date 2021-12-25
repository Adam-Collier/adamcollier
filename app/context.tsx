import React, { useState, useEffect, useContext } from "react";

type ContextItems = {
	user: string | null,
	updateUser: (value: string | null) => void
}

// we use null when we are not logged in so it makes sense to use it here
const AuthContext = React.createContext<ContextItems>({} as ContextItems)

const getUser = async () => {
	// send a post requests to the session route resource
	const response = await fetch("/session", { method: "POST" });
	// if the response is null we are not authenticated
	if (response === null) return null;
	// else return the user
	const user = await response.json();
	return user;
}

export const AuthProvider: React.FC = ({ children }) => {
	const [user, setUser] = useState<string | null>(null);

	useEffect(() => {
		getUser().then(response => {
			setUser(response);
		})
	}, [])

	const updateUser = (value: string | null) => {
		setUser(value);
	}

	return <AuthContext.Provider value={{ user, updateUser }}>
		{children}
	</AuthContext.Provider>
}

export const useAuth = () => {
	return useContext(AuthContext);
}