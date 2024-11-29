import { database } from "../data/database.js";



const insertStmt = database.prepare("INSERT INTO [user] ([email],[password],[firstname],[lastname]) VALUES (?,?,?,?)");
const canSigninStmt = database.prepare("SELECT [userid] FROM [user] WHERE [email]=? AND [password]=?");
const createSessionStmt = database.prepare("INSERT INTO [user_session] VALUES (?,?)");
const destroySessionStmt = database.prepare("DELETE FROM [user_session] WHERE [token]=?");

/**
 * @param {import("../typedefs").SignupUserRequest} user
 */
export function insert(user) {
	insertStmt.run(
		user.email,
		user.password,
		user.firstname,
		user.lastname
	);
}

/**
 * @param {import("../typedefs").SigninUserRequest} user
 */
export function canSignin(user) {
	const result = canSigninStmt.get(
		user.email,
		user.password
	);
	return result?.userid ?? null;
}

/**
 * @param {number} userId
 * @param {string} token
 */
export function createSession(userId, token) {
	createSessionStmt.run(userId, token);
}

/**
 * @param {string} token
 */
export function destroySession(token) {
	destroySessionStmt.run(token);
}