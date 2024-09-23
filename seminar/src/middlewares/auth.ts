import { Request, Response, NextFunction } from "express";

const credentials = "SPARCS2024";

export default async (req: Request, res: Response, next: NextFunction) => {
  if (req.body.credential === credentials) {
    next();
  } else {
    res.status(401).json({ error: "Unauthorized" });
  }
};
