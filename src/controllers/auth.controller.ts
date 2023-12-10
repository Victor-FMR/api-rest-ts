import { Request, Response } from "express";
import { login, registerNewUser } from "../services/auth";
import { handleHttp } from "../utils/error.handles";
import {createClient}from "redis";


export const registerCtrl = async (req: Request, res: Response) => {
  try {
    
     
    const newUser = await registerNewUser(req);
    console.log(newUser);

    res.status(201).json("usuario registrado correctamente");
  } catch (error) {
    handleHttp(res, "Error al crear usuario");
  }
};

export const loginCtrl = async (req: Request, res: Response) => {
  try {
    const result = await login(req);
    res.status(200).json(result);
  } catch (error) {
    handleHttp(res, "Error al iniciar sesion");
  }
};

export const redirectCtrl =async (req: Request, res: Response) => {
  res.redirect('/items')
};