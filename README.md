# Summary Financial Transctions API 📊

![GitHub](https://img.shields.io/github/license/matheus1714/summary-financial-transctions-api)
![GitHub deployments](https://img.shields.io/github/deployments/matheus1714/summary-financial-transctions-api/production)

## About ℹ️

This is the back-end solution for the Hyperplane selection process interview.

This project is the backend that will communicate with the frontend present in the repository [Summary Financial Transctions APP](https://github.com/Matheus1714/summary-financial-transctions-app)

## Table of Content 📜
<!--ts-->
   * [About](#about-ℹ️)
   * [Table of Content](#table-of-content-📜)
   * [Application DEMO](#application-demo-🚀)
   * [Technologies](#technologies-⚙️)
   * [Features](#features-🚀)
   * [Run Project](#run-project-🏃)
   * [License](#license-📝)
<!--te-->

## Application DEMO 🚀

Backend DEMO application can be accessed using [Back-end DEMO](https://www.postman.com/matheus1714/workspace/summary-financial-transctions-api).

You can also access the `BASE_URL`=[https://summary-financial-transctions-api.vercel.app/](https://summary-financial-transctions-api.vercel.app/).

![image](https://github.com/Matheus1714/summary-financial-transctions-api/assets/39354089/7ffeb52c-b59a-4503-a48b-fe0629dc9167)

## Technologies ⚙️

The main technologies for the front-end are:

* [NodeJS](https://nodejs.org/)
* [Typescript](https://www.typescriptlang.org/)
* [Express](https://expressjs.com/)

The main dependencies used are:

```json
"devDependencies": {
   "@rocketseat/eslint-config": "^2.1.0",
   "@types/cors": "^2.8.14",
   "@types/express": "^4.17.17",
   "@types/http-status-codes": "^1.2.0",
   "@types/node": "^20.4.8",
   "@types/pg": "^8.10.2",
   "@types/uuid": "^9.0.3",
   "@typescript-eslint/eslint-plugin": "^6.6.0",
   "eslint": "^8.48.0",
   "eslint-config-standard-with-typescript": "^39.0.0",
   "eslint-plugin-import": "^2.28.1",
   "eslint-plugin-n": "^16.0.2",
   "eslint-plugin-prettier": "^5.0.0",
   "eslint-plugin-promise": "^6.1.1",
   "pre-commit": "^1.2.2",
   "prettier": "3.0.3",
   "rimraf": "^5.0.1",
   "ts-node": "^10.9.1",
   "ts-node-dev": "^2.0.0",
   "typescript": "^5.2.2"
},
"dependencies": {
   "cors": "^2.8.5",
   "dotenv": "^16.3.1",
   "express": "^4.18.2",
   "http-status-codes": "^2.2.0",
   "nodemon": "^3.0.1",
   "pg": "^8.11.2",
   "uuid": "^9.0.0"
}
```

## Features 🚀

All features are for 1 year of financial transactions.

* [X] `GET` spending (%) by category
* [X] `GET` spending (%) by month
* [X] `GET` number of transactions
* [ ] `GET` visited locations by region

## Run Project 🏃

Before running the project, install the dependencies:

```shell
npm i
```

To run the project, run the command:

```shell
npm run dev
```

## License 📝

This project is open-source and is distributed under the MIT License. Feel free to explore, modify, and utilize the codebase according to the terms outlined in the license.

