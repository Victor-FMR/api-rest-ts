import { Router  } from "express";
import { createSession } from "../controllers/payment.controller";

const router = Router();

router.get('/create-checkout-session', createSession)
router.get('/success',)
router.get('/cancel',)


export default router;