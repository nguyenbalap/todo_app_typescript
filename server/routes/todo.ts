import express from "express";
import { index, save, edit, destroy} from "../controllers/todo";

const router: express.Router = express.Router();

router.get('/', index);
router.post('/add', save);
router.put('/update/:id', edit);
router.delete('/delete/:id', destroy);

export default router;
