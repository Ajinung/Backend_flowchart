import express, { Application, NextFunction, Request, Response } from "express";
import cors from "cors";
import morgan from "morgan";
import { errorHandler } from "./middleware/errorHandler";
import { AppError, HttpCode } from "./utils/AppError";
import api from "./api";

const appConfig = (app: Application) => {
  app
    .use(express.json())
    .use(cors())
    .use(morgan("dev"))

    //api endpoint
    .use("/api", api)

    //check for route that doesn't exists
    .all("*", (req: Request, res: Response, next: NextFunction) => {
      next(
        new AppError({
          message: `this route does "${req.originalUrl}" does not exist`,
          httpCode: HttpCode.NOT_FOUND,
        })
      );
    })

    //Error Handling
    .use(errorHandler);
};

export default appConfig;
