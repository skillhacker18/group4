// All actions that can be performed by a user goes here

const HEADERS = { "Content-Type": "application/json" };

/**
 * @param {object} data
 * @returns {Promise<string|number>} Token if successful, otherwise response status
 */
export async function signin(data) {
	console.debug("[DEBUG]:", data);
	const url = import.meta.env.VITE_API_URL + "/auth/signin"
	const response = await fetch(url, {
		method: "POST",
		body: JSON.stringify(data),
		headers: HEADERS
	});
	if (response.ok) return response.json();
	return response.status;
}

export async function signup(data) {
	console.debug("[DEBUG]:", data);
	const url = import.meta.env.VITE_API_URL + "/auth/signup"
	const response = await fetch(url, {
		method: "POST",
		body: JSON.stringify(data),
		headers: HEADERS
	});
	return response.status;
}