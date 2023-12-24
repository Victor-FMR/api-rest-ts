import { Request, Response, Router } from "express";
import { isAuthorized } from "../utils/authorized";
const router = Router();
router.get("/", (req, res) => {
  res.send("Hola desde Inicio");
});

router.get("/logout", isAuthorized, (req: Request, res: Response) => {
  req.logout(()=>{
    res.redirect('/')
  })
  
});

export default router;
