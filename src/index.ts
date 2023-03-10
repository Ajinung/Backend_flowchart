import express, { Application } from "express";

const app: Application = express();
const port: number | string = 9393;

app.listen(port, () => {
  console.log(`server listening on ${port}`);
});
