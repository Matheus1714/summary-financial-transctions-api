import { NextFunction, Request, Response, Router } from "express";
import { StatusCodes } from "http-status-codes";
import transacrionsRepository from "../repositories/transacrions.repository";

const transactionsRoute = Router();

transactionsRoute.get(
  "/transactions/:accountId/:year",
  async (
    req: Request<{ accountId: string; year: string }>,
    res: Response,
    next: NextFunction,
  ) => {
    try {
      const { accountId, year } = req.params;
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
  "/transactions/quantity/:accountId/:year",
  async (
    req: Request<{ accountId: string; year: string }>,
    res: Response,
    next: NextFunction,
  ) => {
    try {
      const { accountId, year } = req.params;
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
  "/transactions/month/:accountId/:year",
  async (
    req: Request<{ accountId: string; year: string }>,
    res: Response,
    next: NextFunction,
  ) => {
    try {
      const { accountId, year } = req.params;
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
  "/transactions/category/:accountId/:year",
  async (
    req: Request<{ accountId: string; year: string }>,
    res: Response,
    next: NextFunction,
  ) => {
    try {
      const { accountId, year } = req.params;
      const transactionsByCategoryInYear =
        await transacrionsRepository.getTransactionsByCategoryInYear(
          accountId,
          year,
        );
      return res
        .status(StatusCodes.OK)
        .send({ error: 0, transactionsByCategoryInYear });
    } catch (error) {
      next(error);
      return res
        .status(StatusCodes.BAD_REQUEST)
        .send({ error: 1, msg: String(error) });
    }
  },
);

export default transactionsRoute;
