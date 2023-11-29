import { Router} from "express";
import { createItem, deleteItem, getAllItems, getItemById, updateItem } from "../controllers/item.controller";

const router = Router();


router.get('/items', getAllItems )

router.post('/item', createItem)

router.put('/item/:id', updateItem)

router.delete('/item/:id', deleteItem)

router.get('/items/:id', getItemById)


export default router