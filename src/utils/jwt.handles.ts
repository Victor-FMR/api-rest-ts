import jwt from "jsonwebtoken";
import { SECRET_KEY } from "../config";

export const generateToken = (id: any) => {
  const token = jwt.sign(id, SECRET_KEY as string, { expiresIn: "1D" });

  return token;
};

export const verifiedToken = (token: string) => {
  const isOk = jwt.verify(token, SECRET_KEY as string);

  return isOk;
};
