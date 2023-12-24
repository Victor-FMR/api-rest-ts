import { NextFunction, Request, Response, Router } from "express";

import {
  authGoogle,
  discordRedirect,
  handleGoogleRedirect,
  loginCtrl,

  registerCtrl,
  sucessAuth,
} from "../controllers/auth.controller";
import {
  registerSchema,
  loginSchema,
} from "../middlewares/validator.middleware";

import passport from "passport";

const router = Router();

router.post("/Register", registerSchema, registerCtrl);
router.post("/Login", loginSchema, loginCtrl);

//Oauth de Discord
router.get('/discord', discordRedirect)
router.get('/discord/redirect',sucessAuth )

//Oauth de Google
router.get("/google", passport.authenticate("google"));
router.get("/google/redirect",passport.authenticate("google", {failureRedirect: "/",}),(req: Request, res: Response)=>{

  res.redirect('/items')
});


// // Ruta para iniciar el proceso de autenticación con Microsoft
// router.get("/discord",passport.authenticate("discord"));
// // Ruta de retorno después de la autenticación con Microsoft
// router.get("/discord/redirect",passport.authenticate("discord",{ successRedirect: '/dashboard',failureRedirect: '/'}));
// router.get('/microsoft', passport.authenticate('microsoft',{prompt: 'select_account',}))
// router.get('/microsoft/redirect', passport.authenticate('microsoft',{successRedirect: '/items',failureRedirect: '/dashboard',}))

export default router;
