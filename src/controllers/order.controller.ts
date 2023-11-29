import { Request, Response } from "express";
import { RequestExt } from "../interfaces/body.interface";


export const getOrder = (req: RequestExt, res: Response) => {
  res.send({ data: " esto solo lo ve alguien autorizado" ,
  user : req.user 


});
};
