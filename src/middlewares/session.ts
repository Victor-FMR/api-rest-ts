import { NextFunction, Request, Response } from "express";
import { verifiedToken } from "../utils/jwt.handles";
import { RequestExt } from "../interfaces/body.interface";


export const checkJwt = (req: RequestExt, res: Response, next: NextFunction) => {
  try {
    const jwtByUser = req.headers.authorization?.replace("Bearer ", "");
    console.log({ jwtByUser });

    if (!jwtByUser) {
      res.status(400).json({ message: "no tienes token" });
      return;
    }

    const isUser = verifiedToken(jwtByUser);

    if (!isUser) {
      res.status(400).json({ message: "token invalido" });
      return;
    }
    req.user =  isUser 

    next();
  } catch (error) {
    console.log(error);
    res.status(400).json({ message: "sesion no valida" });
  }
};
