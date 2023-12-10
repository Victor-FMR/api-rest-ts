import { Request, Response } from "express";

export const dashCtrl = (req : Request, res : Response)=>{
    console.log(req.user)
    res.send('dashboard')
}