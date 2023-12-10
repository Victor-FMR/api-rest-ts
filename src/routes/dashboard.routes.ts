import { Request, Response, Router } from "express";
import { dashCtrl } from "../controllers/dashboard.controller";
import userGoogle from "../models/user.google";
import passport from "passport";
const router = Router();

router.get("/dashboard",(req: Request, res: Response) => {
    console.log(req.user)
  res.send("dash dash");
});
export default router;
