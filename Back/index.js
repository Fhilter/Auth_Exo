import express from "express";
import { userRouter } from "./src/routes/user_router.js";
import mongoose from "mongoose";


const PORT = 8000;
const app = express();
const loggerMiddleware = (req, res, next) => {
  console.log(`[${new Date().toISOString()}] ${req.method} ${req.url}`);
  next();
}

const MONGODB_URL =
  "mongodb+srv://phtraas:admin@mydbadmin.krn8son.mongodb.net/authExo";

//middleware to parse the body of a request in json
  app.use(express.json());
  
//use this middleware for routing
app.use("/api/authExo", userRouter);

//middleware serving static pages
app.use(express.static("public"));


//use this for personalized logging in the console
app.use(loggerMiddleware);


app.listen(PORT, function () {
  console.log(`Server has started on: http://localhost:${PORT}`);

  mongoose
    .connect(MONGODB_URL)
    .then(() => {
      // Afficher dans la console que la BDD est connecté
      console.log("Connecté à la BDD");
    })
    .catch((err) => {
      // Erreur dans le then
      console.log("Pas connecté à la BDD");
      console.log(err);
    });
});
