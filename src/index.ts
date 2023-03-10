import express, { Application } from "express";
import appConfig from "./app";
import environmentVaraible from "./config/environmentVaiable";

const app: Application = express();

appConfig(app);

app.listen(environmentVaraible.PORT, () => {
  console.log(`server listening`);
});
