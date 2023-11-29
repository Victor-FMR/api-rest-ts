import { Request } from 'express';

import { PrismaClient } from '@prisma/client';
import { User  } from '../interfaces/body.interface';
import { script, verified } from '../utils/bscrypt.handles';
import { generateToken } from '../utils/jwt.handles';

const prisma = new PrismaClient();

export const registerNewUser = async (req: Request) => {
  try {

    const existingUser = await prisma.user.findUnique({
      where: { email: req.body.email },
    });

    if (existingUser) {
      return "El usuario ya existe";
    }
    const passwordhash = await script(req.body.password)

    const newUser : User = await prisma.user.create({
      data: { email: req.body.email, password: passwordhash, name: req.body.name, lastname: req.body.lastname}
    });
    

   const token = generateToken({ id: newUser.id })
    const data ={
      token, 
      user : newUser
    }
    return data


    
  } catch (error) {
    console.error(error);
    throw error; // Re-lanza el error para que pueda ser manejado en el nivel superior
  } finally {
    await prisma.$disconnect(); // Invoca la función $disconnect correctamente
  }
};


export const login =async(req : Request)=>{
  try {
    const correct = await prisma.user.findUnique({where: {email : req.body.email}})
  if(!correct){
    return "El usuario no existe"
  }
  const isCorrect = await verified(req.body.password, correct.password)
  if(!isCorrect){
    return "Contraseña incorrecta"
    
  }
  const token = generateToken({ id: correct.id })
  const data ={
    token,
    correct
  }
  return data
    
  } catch (error) {
    console.error(error)
  }
  
  
}