import dotenv from "dotenv";
import db from "../db";
import Transactions from "../models/transactions.model";
import DatabaseError from "../models/errors/database.error.model";

dotenv.config();

interface TransactionByMonthInYear {
  month: number;
  transactionCount: number;
  percent: number;
}

interface TransactionByCategoryInYear {
  transactionCount: number;
  percent: number;
}

class TransactionsRepository {
  async getAllransactions(accountId: string): Promise<Transactions[]> {
    const query = `
      SELECT *
      FROM transactions
      WHERE account_id = $1
    `;
    const values = [accountId];
    const { rows } = await db.query<Transactions>(query, values);
    return rows || [];
  }

  async getTransactionsByYear(
    accountId: string,
    year: string,
  ): Promise<Transactions[]> {
    try {
      const query = `
        SELECT *
        FROM transactions
        WHERE account_id = $1 AND
        EXTRACT(YEAR FROM created_at) = $2;
      `;
      const values = [accountId, year];
      const { rows } = await db.query<Transactions>(query, values);
      return rows || [];
    } catch (error) {
      console.error(error);
      throw new DatabaseError("Query error by year", error);
    }
  }

  async getTransactionsQuantityInYear(
    accountId: string,
    year: string,
  ): Promise<number> {
    try {
      const rows = await this.getTransactionsByYear(accountId, year);
      return rows.length;
    } catch (error) {
      console.error(error);
      throw new DatabaseError("Query error by year", error);
    }
  }

  async getTransactionsByMonthInYear(
    accountId: string,
    year: string,
  ): Promise<TransactionByMonthInYear[]> {
    try {
      const query = `
      WITH monthly_counts AS (
        SELECT
          DATE_TRUNC('month', created_at) AS month,
          COUNT(*) AS transaction_count
        FROM transactions
        WHERE EXTRACT(YEAR FROM created_at) = $2
        AND account_id = $1
          GROUP BY month
        ),
        total_count AS (
          SELECT COUNT(*) AS total_transactions
          FROM transactions
          WHERE EXTRACT(YEAR FROM created_at) = $2
          AND account_id = $1
        )
        SELECT
          TO_CHAR(mc.month, 'MM') AS month,
          mc.transaction_count,
          (mc.transaction_count::DECIMAL / tc.total_transactions * 100)::DECIMAL(5, 2) AS percent
        FROM monthly_counts mc
        CROSS JOIN total_count tc
        ORDER BY mc.month;
      `;
      const values = [accountId, year];
      const { rows } = await db.query<TransactionByMonthInYear>(query, values);
      return rows || [];
    } catch (error) {
      console.error(error);
      throw new DatabaseError("Query error by year", error);
    }
  }

  async getTransactionsByCategoryInYear(
    accountId: string,
    year: string,
  ): Promise<TransactionByCategoryInYear[]> {
    try {
      const query = `
      SELECT
        t1.transaction_type,
        (t1.transaction_count * 100.0 / t2.total_transactions) AS percentage
        FROM (
            SELECT
                transaction_type,
                DATE_PART('year', created_at) AS transaction_year,
                COUNT(*) AS transaction_count
            FROM transactions
            WHERE DATE_PART('year', created_at) = $2
            AND account_id = $1
            GROUP BY transaction_type, transaction_year
        ) AS t1
        JOIN (
            SELECT
                DATE_PART('year', created_at) AS transaction_year,
                COUNT(*) AS total_transactions
            FROM transactions
            WHERE DATE_PART('year', created_at) = $2
            GROUP BY transaction_year
        ) AS t2
        ON t1.transaction_year = t2.transaction_year
        ORDER BY t1.transaction_type;
      `;
      const values = [accountId, year];
      const { rows } = await db.query<TransactionByCategoryInYear>(
        query,
        values,
      );
      return rows || [];
    } catch (error) {
      console.error(error);
      throw new DatabaseError("Query error by year", error);
    }
  }
}

export default new TransactionsRepository();
