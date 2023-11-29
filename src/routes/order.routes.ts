import { Router  } from "express";
import { getOrder } from "../controllers/order.controller";
import { checkJwt } from "../middlewares/session";

const router = Router();

router.get('/order', checkJwt,getOrder)


export default router;