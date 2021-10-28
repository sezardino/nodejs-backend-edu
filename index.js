import express from "express";
import mongoose from "mongoose";
import postRoute from "./postRoute.js";

const DB_URL =
  "mongodb+srv://user:user@cluster0.uf4jh.mongodb.net/myFirstDatabase?retryWrites=true&w=majority";

const app = express();
app.use(express.json());

app.use("/api", postRoute);

const init = async () => {
  try {
    await mongoose.connect(DB_URL);
    app.listen(3000, () => console.log("server working"));
  } catch (error) {
    console.log(error);
  }
};

init();
