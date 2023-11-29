import { Request, Response } from "express";
import { login, registerNewUser } from "../services/auth";
import { handleHttp } from "../utils/error.handles";

export const registerCtrl = async(req : Request, res : Response)=>{


    try {
        const newUser = await registerNewUser(req)
        res.status(201).json( newUser)

    } catch (error) {
        handleHttp(res, 'Error al crear usuario')
    }
}

export const loginCtrl = async(req : Request, res : Response)=>{
    try {
        const result = await login(req)
        res.status(200).json(result)
    } catch (error) {
        handleHttp(res, 'Error al iniciar sesion')
    }
   
}