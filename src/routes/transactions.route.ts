import { NextFunction, Request, Response, Router } from "express";
import { StatusCodes } from "http-status-codes";
import transacrionsRepository from "../repositories/transacrions.repository";

const transactionsRoute = Router();

transactionsRoute.get(
  "/transactions",
  async (req: Request, res: Response, next: NextFunction) => {
    try {
      const { accountId } = req.body;
      const transactions =
        await transacrionsRepository.getAllransactions(accountId);
      return res.status(StatusCodes.OK).send({ error: 0, transactions });
    } catch (error) {
      next(error);
      return res
        .status(StatusCodes.BAD_REQUEST)
        .send({ error: 1, msg: String(error) });
    }
  },
);

transactionsRoute.get(
  "/transactions/:year",
  async (req: Request<{ year: string }>, res: Response, next: NextFunction) => {
    try {
      const { year } = req.params;
      const { accountId } = req.body;
      const transactions = await transacrionsRepository.getTransactionsByYear(
        accountId,
        year,
      );
      return res.status(StatusCodes.OK).send({ error: 0, transactions });
    } catch (error) {
      next(error);
      return res
        .status(StatusCodes.BAD_REQUEST)
        .send({ error: 1, msg: String(error) });
    }
  },
);

transactionsRoute.get(
  "/transactions/:year",
  async (req: Request<{ year: string }>, res: Response, next: NextFunction) => {
    try {
      const { year } = req.params;
      const { accountId } = req.body;
      const transactions = await transacrionsRepository.getTransactionsByYear(
        accountId,
        year,
      );
      return res.status(StatusCodes.OK).send({ error: 0, transactions });
    } catch (error) {
      next(error);
      return res
        .status(StatusCodes.BAD_REQUEST)
        .send({ error: 1, msg: String(error) });
    }
  },
);

transactionsRoute.get(
  "/transactions/quantity/:year",
  async (req: Request<{ year: string }>, res: Response, next: NextFunction) => {
    try {
      const { year } = req.params;
      const { accountId } = req.body;
      const quantityOfTransactionsInYear =
        await transacrionsRepository.getTransactionsQuantityInYear(
          accountId,
          year,
        );
      return res
        .status(StatusCodes.OK)
        .send({ error: 0, quantity: quantityOfTransactionsInYear });
    } catch (error) {
      next(error);
      return res
        .status(StatusCodes.BAD_REQUEST)
        .send({ error: 1, msg: String(error) });
    }
  },
);

transactionsRoute.get(
  "/transactions/month/:year",
  async (req: Request<{ year: string }>, res: Response, next: NextFunction) => {
    try {
      const { year } = req.params;
      const { accountId } = req.body;
      const quantityTransactionsByMonthInYear =
        await transacrionsRepository.getTransactionsByMonthInYear(
          accountId,
          year,
        );
      return res
        .status(StatusCodes.OK)
        .send({ error: 0, quantityTransactionsByMonthInYear });
    } catch (error) {
      next(error);
      return res
        .status(StatusCodes.BAD_REQUEST)
        .send({ error: 1, msg: String(error) });
    }
  },
);

transactionsRoute.get(
  "/transactions/category/:year",
  async (req: Request<{ year: string }>, res: Response, next: NextFunction) => {
    try {
      const { year } = req.params;
      const { accountId } = req.body;
      const quantityTransactionsByCategoryInYear =
        await transacrionsRepository.getTransactionsByCategoryInYear(
          accountId,
          year,
        );
      return res
        .status(StatusCodes.OK)
        .send({ error: 0, quantityTransactionsByCategoryInYear });
    } catch (error) {
      next(error);
      return res
        .status(StatusCodes.BAD_REQUEST)
        .send({ error: 1, msg: String(error) });
    }
  },
);

export default transactionsRoute;
