import { Request, Response, NextFunction } from "express";

export default function logRequest(req: Request, res: Response, next: NextFunction) {
  const now = new Date().toISOString();
  console.log(`[${now}] ${req.method} ${req.path}`);
  next();
}