import dotenv from "dotenv";
import db from "../db";
import Accounts from "../models/accounts.model";

dotenv.config();

class AccountsRepository {
  async getAllaccounts(): Promise<Accounts[]> {
    const query = `
      SELECT *
      FROM accounts
    `;
    const { rows } = await db.query<Accounts>(query);
    return rows || [];
  }
}

export default new AccountsRepository();
