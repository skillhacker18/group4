import { useState } from "react";



export function useToken() {
	const [token, setToken] = useState(window.localStorage.getItem("token"));
	return {
		token, setToken: (value, ispermanent) => {
			setToken(value);
			if (ispermanent) {
				window.localStorage.setItem("token", value);
				return;
			}
			window.localStorage.removeItem("token");
		}
	}
}
