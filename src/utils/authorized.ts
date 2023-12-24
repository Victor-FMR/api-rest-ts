import { NextFunction, Request, Response } from "express";

export const isAuthorized = (req: Request, res : Response, next: NextFunction)=>{

    if(req.user) {
        next();
    }else{res.redirect('/auth/google')}

    
}