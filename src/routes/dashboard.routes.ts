import { Request, Response, Router } from "express";
import { dashCtrl } from "../controllers/dashboard.controller";
import passport from "passport";

const router = Router();

router.get("/dashboard",(req: Request, res: Response,) => {
    console.log(req.user)
});
export default router;
