import { Request, Response, NextFunction } from "express";
import { findMaximum } from "../util/maximum";

const MaxController = {
  maxFirst: (req: Request, res: Response, _next: NextFunction): void => {
    console.log(req.body);
    const input = req.body.input as string[];
    const result = findMaximum(input, true);
    res.json({
      result
    });
  },
  maxLast: (req: Request, res: Response, _next: NextFunction): void => {
    console.log(req.body);
    const input = req.body.input as string[];
    const result = findMaximum(input, false);
    res.json({
      result
    });
  }
};

export default MaxController;
