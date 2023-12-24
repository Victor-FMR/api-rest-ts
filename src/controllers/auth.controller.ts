import { Request, Response } from "express";
import { login, registerNewUser } from "../services/auth";
import { handleHttp } from "../utils/error.handles";
import { GoogleAuth, OAuth2Client ,} from "google-auth-library";

import { DISCORD_CLIENT_ID, DISCORD_CLIENT_SECRET, GOOGLE_CLIENT_ID, GOOGLE_CLIENT_SECRET } from "../config";
import axios from "axios";

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

export const  discordRedirect = (req: Request, res: Response)=>{
  res.redirect('https://discord.com/api/oauth2/authorize?client_id=1180783271647387681&response_type=code&redirect_uri=http%3A%2F%2Flocalhost%3A9999%2Fauth%2Fdiscord%2Fredirect&scope=identify+guilds+email')
  
}
export const sucessAuth =async (req: Request, res: Response)=>{
  const {code}= req.query
  try {
    const response = await axios.post('https://discord.com/api/oauth2/token',{
      cliente_Id : DISCORD_CLIENT_ID,
      cliente_secret: DISCORD_CLIENT_SECRET,
      redirect_uri: 'http://localhost:9999/auth/discord/redirect',
      scope: ['identify','email','guilds'],
      code,
    })
    const { access_token, token_type } = response.data;
    res.json({access_token,token_type})
  } catch (error) {
    console.error(error)
  }
  
  
}







export const authGoogle = async(req: Request, res: Response)=>{
  const CLIENT_ID = GOOGLE_CLIENT_ID
  const CLIENT_SECRET = GOOGLE_CLIENT_SECRET
  const REDIRECT_URI = 'http://localhost:9999/auth/google/redirect'
  
  const oauth2Client = new OAuth2Client(CLIENT_ID, CLIENT_SECRET, REDIRECT_URI);
   
 const url =  oauth2Client.generateAuthUrl({
    access_type: "offline",
    scope: ['https://www.googleapis.com/auth/userinfo.email']
  })
  res.redirect(url);

  
}

export const handleGoogleRedirect = async (req: Request, res: Response) => {
  const { code } = req.query;

  try {
    const oauth2Client = new OAuth2Client(GOOGLE_CLIENT_ID, GOOGLE_CLIENT_SECRET, );
    const { tokens } = await oauth2Client.getToken(code as string);
    // Aquí puedes almacenar los tokens en la base de datos o realizar otras acciones necesarias.

    res.json({ tokens });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Error al obtener tokens de acceso' });
  }
};





// export const authRedirect = async(req: Request, res: Response)=>{
//  const code = req.query.code
//  try {
//    if (code){
//     const { tokens } = await OAuth2Client
//    }
//  } catch (error) {
  
//  }
// }