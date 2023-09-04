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
   "@types/express": "^4.17.17",
   "@types/http-status-codes": "^1.2.0",
   "@types/node": "^20.4.8",
   "@types/pg": "^8.10.2",
   "nodemon": "^3.0.1",
   "pre-commit": "^1.2.2",
   "rimraf": "^5.0.1",
   "ts-node": "^10.9.1",
   "ts-node-dev": "^2.0.0",
   "typescript": "^5.1.6"
},
"dependencies": {
   "dotenv": "^16.3.1",
   "express": "^4.18.2",
   "http-status-codes": "^2.2.0",
   "pg": "^8.11.2"
}
```

## Features 🚀

All features are for 1 year of financial transactions.

* [ ] `GET` spending (%) by category
* [ ] `GET` spending (%) by month
* [ ] `GET` number of transactions
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

