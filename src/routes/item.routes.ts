import { Router} from "express";
import { createItem, deleteItem, getAllItems, getItemById, updateItem } from "../controllers/item.controller";
import passport from "passport";
import { isAuthorized } from "../utils/authorized";

const router = Router();


router.get('/items', isAuthorized,getAllItems )

router.post('/item', createItem)

router.put('/item/:id', updateItem)

router.delete('/item/:id', deleteItem)

router.get('/items/:id', getItemById)


export default router