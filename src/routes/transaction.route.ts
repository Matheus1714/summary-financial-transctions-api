import { NextFunction, Request, Response, Router } from "express";
import { StatusCodes } from "http-status-codes";
import transacrionRepository from "../repositories/transacrion.repository";

const transactionsRoute = Router();

transactionsRoute.get(
  "/transactions",
  async (req: Request, res: Response, next: NextFunction) => {
    try {
      const transactions = await transacrionRepository.getAllransactions();
      return res.status(StatusCodes.OK).send(transactions);
    } catch (error) {
      next(error);
    }
  },
);

export default transactionsRoute;
