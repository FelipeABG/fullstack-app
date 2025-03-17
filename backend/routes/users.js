import express from "express";
import { get_users } from "../controllers/users.js";

const router = express.Router();
router.get("/users", get_users);
export default router;
