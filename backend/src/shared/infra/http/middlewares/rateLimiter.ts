import { Request, Response, NextFunction } from 'express';
import AppError from '@shared/errors/AppError';

export default async function rateLimiter(
  request: Request,
  response: Response,
  next: NextFunction,
): Promise<void> {
  try {
    return next();
  } catch (err) {
    throw new AppError('Too many requests', 429);
  }
}
