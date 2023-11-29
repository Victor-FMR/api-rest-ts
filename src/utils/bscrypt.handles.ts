import bscrypt from "bcrypt";
import { Request } from "express";

export const script = async (pass: string) => {
  const passwordhash = await bscrypt.hash(pass, 10);
  return passwordhash;
};

export const verified = (pass :string, passwordhash: string) => {

  const isCorrect = bscrypt.compare(pass, passwordhash)
  return isCorrect;
};
