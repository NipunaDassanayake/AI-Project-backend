import { NextFunction, Request, Response } from "express";

const GlobalErrorHandlingMiddleware = (
  error: Error,
  req: Request,
  res: Response,
  next: NextFunction
) => {
  switch (error.name) {
    case "NotFoundError":
      console.log(error);
      return res
        .status(404)
        .json({ message: error.message.replaceAll("\n", "") });

    case "ValidationError":
      console.log(error);
      return res
        .status(400)
        .json({ message: error.message.replaceAll("\n", "") });

    case "Unauthenticated":
      console.log(error);
      return res
        .status(401)
        .json({ message: error.message.replaceAll("\n", "") });

    case "Error":
      console.log(error);
      return res
        .status(500)
        .json({ message: error.message.replaceAll("\n", "") });

    default:
      console.log(error);
      return res.status(500).json({ message: error.message });
  }
};

export default GlobalErrorHandlingMiddleware;
