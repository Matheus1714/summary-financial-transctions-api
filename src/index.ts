import dotenv from "dotenv";
import express from "express";
import statusRoute from "./routes/status.route";
import transactionsRoute from "./routes/transactions.route";
import accountsRoute from "./routes/accounts.route";

const app = express();
dotenv.config();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(statusRoute);
app.use(transactionsRoute);
app.use(accountsRoute);

const port = process.env.PORT || 3333;

app.listen(port, () => console.log(`Server running on port ${port}`));
