import express from "express";
import {
   get_users,
   delete_user,
   post_user,
   put_user,
} from "../controllers/users.js";
import multer from "multer";

const router = express.Router();
const upload = multer();
router.get("/users", get_users);
router.delete("/users/:userID", delete_user);
router.post("/users", upload.array(), post_user);
router.put("/users", upload.array(), put_user);
export default router;
