import express from "express";
import { userRouter } from "./routes/user_router";

const PORT = 8000;
const app = express();
const MONGODB_URI =
  "mongodb+srv://phtraas:admin@mydbadmin.krn8son.mongodb.net/authExo";

//use this middleware for routing
app.use("/api/authExo", userRouter);

//middleware serving static pages
app.use(express.static("public"));

//middleware to parse the body of a request in json
app.use(express.json());

//use this for personalized logging in the console
app.use(loggerMiddleware);

bcrypt.genSalt(saltRounds, (err, salt) => {});

app.listen(PORT, function () {
  console.log(`Server has started on: http://localhost:${PORT}`);

  mongoose
    .connect(MONGODB_URI)
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
