import { Request, Response } from "express";
import { handleHttp } from "../utils/error.handles";
import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();
import {
  deleteItems,
  getItems,
  getItemsId,
  insertItem,
  updateItems,
} from "../services/item";

export const createItem = async (req: Request, res: Response) => {
  try {
    const newItem = await insertItem(req);
    res.status(200).json("item creado correctamente");
    console.log(newItem);
  } catch (error) {
    // console.error(error);
    // res.status(500).json({ error: 'Hubo un error al insertar el ítem.' });
    console.log(error);
    handleHttp(res, "Hubo un error al crear un item");
  }
};

export const getAllItems = async (req: Request, res: Response) => {
  try {
    console.log(req.user)
    res.render('items.ejs')
    
  } catch (e) {
    console.log(e);

    handleHttp(res, "hubo un error al solicitar ");
  }
};

export const updateItem = async (req: Request, res: Response) => {
  try {
    const item = await updateItems(req);
  } catch (error) {
    handleHttp(res, "Hubo un error al actualizar el item");
  }
};

export const deleteItem = async (req:  Request, res: Response) => {
  
  try {
    const deleteItem = await deleteItems(req);
    if(!deleteItem) return res.status(404).json({message: "No se encontro el item a eliminar"});
   return res.status(200).json(deleteItem);

  } catch (error) {
    handleHttp(res, "Hubo un error al eliminar el item");
  }
};

export const getItemById = async (req: Request, res: Response) => {
  try {
    const item = await getItemsId(req);
    res.status(200).json(item);
    console.log("aprobado");
  } catch (error) {
    console.log(error);
    handleHttp(res, "hubo un error al obtener un dato");
  }
};
