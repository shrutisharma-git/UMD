import { Router } from "express";
import { downloadMedia } from "../controllers/download.controllers.js";

const router = Router();

router.post("/download", downloadMedia);

export default router;