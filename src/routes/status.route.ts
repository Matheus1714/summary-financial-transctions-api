import { Request, Response, Router } from "express";
import { StatusCodes } from "http-status-codes";

const statusRoute = Router();

statusRoute.get("/", (req: Request, res: Response) => {
  res.json({ status: StatusCodes.OK });
});

export default statusRoute;
