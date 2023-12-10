
import bcrypt from "bcrypt";
import { Request } from "express";

export const script = async (pass: string) => {
  try {
    const passwordhash = await bcrypt.hash(pass, 10);
    return passwordhash;
  } catch (error) {
    console.error("Error al hashear la contraseña:", error);
    throw error; // Puedes manejar el error según tus necesidades
  }
};

export const verified = async (pass: string, passwordhash: string) => {
  try {
    const isCorrect = await bcrypt.compare(pass, passwordhash);
    return isCorrect;
  } catch (error) {
    console.error("Error al verificar la contraseña:", error);
    throw error; // Puedes manejar el error según tus necesidades
  }
};
