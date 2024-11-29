import express from "express"
import userController from "./controllers/user.js";



const PORT = parseInt(process.env.PORT)
const app = express()

app.use(express.json());

app.use((request, response, next) => {
	response.setHeader("Access-Control-Allow-Origin", "*");
	response.setHeader("Access-Control-Allow-Headers", "*");
	next();
});

app.get("/api-test", (request, response) => {
	response.send("API is available");
});

app.post("/auth/signin", (request, response) => {
	const token = userController.signin(request.body);
	if (token === null) {
		response.sendStatus(401);
		return;
	}
	response.json(token);
});

app.post("/auth/signup", (request, response) => {
	userController.signup(request.body);
	response.sendStatus(201);
});

app.post("/auth/signout", (request, response) => {
	response.sendStatus(501);
});

app.delete("/users/:userId", (request, response) => {
	response.sendStatus(501);
});

app.listen(PORT, () => {
	console.log(`Server is running on port ${PORT}`);
});
