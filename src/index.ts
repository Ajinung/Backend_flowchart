import express, { Application } from "express";
import environmentVaraible from "./config/environmentVaiable";

const app: Application = express();

app.listen(environmentVaraible.PORT, () => {
  console.log(`server listening`);
});
