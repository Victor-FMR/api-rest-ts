import { Router} from "express";
import { logMiddleware } from "../middlewares/log";
import { loginCtrl, registerCtrl } from "../controllers/auth.controller";


const router = Router();


router.post('/register',  registerCtrl)

router.post('/login',loginCtrl )


export default router