// import { Router } from "express"
// import { registerUser } from "../controllers/user.controller.js"
// const router = Router()

// router.route("/register").post(registerUser)

// export default router

import { Router } from "express";
import registerUser  from "../controllers/user.controller.js"; // Adjust path if needed

const router = Router();

// Define the route
router.route("/register").post(registerUser);

export default router;
