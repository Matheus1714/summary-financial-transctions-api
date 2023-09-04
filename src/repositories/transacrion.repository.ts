import dotenv from "dotenv";
import db from "../db";
import Transactions from "../models/transactions.model";

dotenv.config();

class TransactionRepository {
  async getAllransactions(): Promise<Transactions[]> {
    const query = `
        SELECT *
        FROM transactions
    `;
    const { rows } = await db.query<Transactions>(query);
    return rows || [];
  }
}

export default new TransactionRepository();
