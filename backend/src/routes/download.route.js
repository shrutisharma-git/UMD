// import { Router } from "express";
// import { downloadMedia } from "../controllers/download.controllers.js";

// const router = Router();

// router.post("/download", downloadMedia);

// export default router;


import { Router } from "express";
import { downloadMedia, getMediaInfo } from "../controllers/download.controllers.js";

const router = Router();

// Route to fetch video details (Thumbnail, Title, etc.)
router.post("/info", getMediaInfo);

// Route to handle the actual stream
router.post("/download", downloadMedia);

export default router;