import express from "express";
import { get_users, delete_user } from "../controllers/users.js";

const router = express.Router();
router.get("/users", get_users);
router.delete("/users/:userID", delete_user);
export default router;
