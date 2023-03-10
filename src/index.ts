import express, { Application } from "express";
import appConfig from "./app";
import dbConfig from "./config/DB";
import environmentVaraible from "./config/environmentVaiable";

const app: Application = express();

//application initialization
appConfig(app);

//DB initialization
dbConfig();

app.listen(environmentVaraible.PORT, () => {
  console.log(`server listening`);
});
