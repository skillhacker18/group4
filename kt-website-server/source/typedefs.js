/**
 * @module typedefs
 * 
 * @typedef {object} User
 * @property {number} userid
 * @property {string} email
 * @property {string} password
 * @property {string?} firstname
 * @property {string?} lastname
 * 
 * @typedef {Omit<User, "userid">} SignupUserRequest
 * 
 * @typedef {object} SigninUserRequest
 * @property {string} email
 * @property {string} password
 * @property {boolean} rememberme
 */
export { };