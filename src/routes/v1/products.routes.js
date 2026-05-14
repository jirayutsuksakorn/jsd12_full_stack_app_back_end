import { Router } from "express";
import * as productController from "../../modules/products/products.controller.js";

export const router = Router();

// สังเกตว่าใช้ "/" เพราะเราจะไปกำหนด "/products" ที่ไฟล์ index.js (จุดนี้สำคัญ!)
router.get("/", productController.getAllProducts);
router.post("/", productController.createProduct);