import { randomUUID } from "node:crypto"
import { canSignin, createSession, insert } from "../repositories/user.js";

/**
 * @param {import("../typedefs").SigninUserRequest} user
 */
function signin(user) {
	const userId = canSignin(user);
	if (userId === null) return null;
	const token = randomUUID();
	createSession(userId, token);
	return token;
}

/**
 * @param {import("../typedefs").SignupUserRequest} user
 */
function signup(user) {
	insert(user);
}

export default { signin, signup };