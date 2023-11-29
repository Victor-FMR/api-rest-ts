import { PrismaClient } from "@prisma/client";
import { Request, Response } from "express";
const prisma = new PrismaClient();

//crear item nuevo
export const insertItem = async (req: Request) => {
  const newItem = await prisma.item.create({ data: req.body });
  return newItem;
};

//buscar items
export const getItems = async (req: Request) => {
  const item = await prisma.item.findMany();
  return item;
};
//busacr registros por id
export const getItemsId = async (req: Request) => {
  const item = await prisma.item.findUnique({
    where: { id: Number(req.params.id) },
  });
  return item;
};

//borrar items
export const deleteItems = async (req: Request) => {
  try {
    const item = await prisma.item.delete({
      where: { id: Number(req.params.id) },
    });

    return item;
  } catch (error) {
    console.log(error);
  }
};
//actualizar item
export const updateItems = async (req: Request) => {
  const itemID = Number(req.params.id);
  const item = await prisma.item.update({
    where: { id: itemID },
    data: req.body,
  });
  return item;
};
