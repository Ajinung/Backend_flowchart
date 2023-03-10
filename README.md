WORKING ON EXPRESS, BACKEND

1. create src folder, then create app.ts, index.ts file inside the folder
2. create .env file,
3. create gitignore file
4. create port in .env file
5. inside src folder, create config folder
6. inside config folder create an index.ts file where you would call your enviranment variable
7. create an environmentVariable file
8. import dotenv from "dotenv" in the environment variab;le file created in enviraonmentVairable filder
9. set up app.ts file
10. set up the database by creating DB file in config
11. add the mongoDb connection string in the .env file e.g "MONGODB_STRING_LOCAL = mongodb://127.0.0.1:27017/set06_nodeClass"
12. import appConfig and dbConfig in your root index.ts file
13. set up error handling by crating utils folder in src
14. create appError file
15. create httpCode enum object file //enum helps us creaate constants
16. create interface errorArgs in the appError file
17. create class AppError in the appError file
18. create middleware folder in your config folder
19. create index.ts file middleware folder
20. create errorHandler folder
21. create index.ts file in errorHandler folder
22. create route file in config config folder
23. create the homeroute file
24. add router code in the homeroute
25. create api folder in src
