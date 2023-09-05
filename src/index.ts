import cors from "cors";
import dotenv from "dotenv";
import express from "express";
import accountsRoute from "./routes/accounts.route";
import statusRoute from "./routes/status.route";
import transactionsRoute from "./routes/transactions.route";

const app = express();
dotenv.config();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(statusRoute);
app.use(transactionsRoute);
app.use(accountsRoute);

const port = process.env.PORT || 3333;

app.listen(port, () => console.log(`Server running on port ${port}`));
