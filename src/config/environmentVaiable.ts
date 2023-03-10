import dotenv from "dotenv";
dotenv.config();

const environmentVaraible = {
  PORT: process.env.PORT!, //the exclaimation tells ts that the port is a string you can write it as   PORT: process.env.PORT as string\
  MONGODB_STRING_LOCAL: process.env.MONGODB_STRING_LOCAL!, //caling the port from the .env file
};

export default environmentVaraible;
