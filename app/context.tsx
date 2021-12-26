import React, { useState, useEffect, useContext } from "react";
import useSwr from "swr";

type ContextItems = {
	user: string | null,
	updateUser: (value: string | null) => void
}

// we use null when we are not logged in so it makes sense to use it here
const AuthContext = React.createContext<ContextItems>({} as ContextItems)

const fetcher = (url: string) => fetch(url, { method: "POST" }).then(r => r.json())

export const AuthProvider: React.FC = ({ children }) => {
	const [user, setUser] = useState<string | null>(null);

	const { data } = useSwr("/session", fetcher)

	if (data !== user) setUser(data);

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