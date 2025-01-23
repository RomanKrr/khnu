import express from "express"
import { protectRoute } from "../middleware/auth.middleware.js";
import { getRating } from "../controllers/rating.controller.js";

const router = express.Router();

router.get("/rating",protectRoute, getRating);

export default router;
