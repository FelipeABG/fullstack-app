import express from "express";
import cors from "cors";
import router from "./routes/users.js";

const app = express();

app.use(express.json());
app.use(cors());
app.use(router);

app.listen(8000);
