import express from "express";
import { userRouter } from "./src/routes/user_router.js";
import mongoose from "mongoose";

const PORT = 8000;
const app = express();

const MONGODB_URL =
  "mongodb+srv://phtraas:admin@mydbadmin.krn8son.mongodb.net/authExo";

//middleware to parse the body of a request in json, MUST BE BEFORE OTHER USES
app.use(express.json());

//use this middleware for routing
app.use("/api/authExo", userRouter);

app.listen(PORT, async function () {
  console.log(`Server has started on: http://localhost:${PORT}`);

  await mongoose
    .connect(MONGODB_URL)
    .then(() => {
      console.log("Connecté à la BDD");
    })
    .catch((err) => {
      console.log(err);
    });
});
