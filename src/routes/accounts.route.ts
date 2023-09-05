import { NextFunction, Request, Response, Router } from "express";
import { StatusCodes } from "http-status-codes";
import accountsRepository from "../repositories/accounts.repository";

const accountsRoute = Router();

accountsRoute.get(
  "/accounts",
  async (req: Request, res: Response, next: NextFunction) => {
    try {
      const accounts = await accountsRepository.getAllaccounts();
      return res.status(StatusCodes.OK).send({ error: 0, accounts });
    } catch (error) {
      next(error);
      return res
        .status(StatusCodes.BAD_REQUEST)
        .send({ error: 1, msg: String(error) });
    }
  },
);

export default accountsRoute;
