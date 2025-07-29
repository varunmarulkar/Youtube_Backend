import { Login, Register } from "../Controllers/user.controller.js"

// User Routes
export function userRoutes(app){
    app.post("/register",Register)
    app.post("/login",Login)
}