import express from "express";
import { processPaymentInput } from "../controllers/processPaymentController.js";

const router = express.Router();

router.post("/payments", processPaymentInput)

export default router;