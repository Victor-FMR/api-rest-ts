import { NextFunction, Request, Response } from "express";
import { registerValidator, loginValidator } from "../schemas/auth.validator";
import { ZodError } from "zod";


export const registerSchema = (req: Request,  res: Response, next: NextFunction) => {
  try {
    registerValidator.parse(req.body);
    next();
  } catch (error: any) {
    if (error instanceof ZodError) {
      // Accede al primer objeto de error en la propiedad "issues"
      const primerError = error.issues[0];
      
      res.status(400).json(primerError.message);
    }
  }
};


export const loginSchema = (req: Request,  res: Response, next: NextFunction) => {

    try {
       loginValidator.parse(req.body)
       next()
    } catch (error : any) {
      if (error instanceof ZodError) {
        const primerError = error.issues[0];
        res.status(400).json(primerError.message);
      }

    }

}