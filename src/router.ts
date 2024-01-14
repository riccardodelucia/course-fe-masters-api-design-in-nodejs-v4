import { error } from "console";
import { Router } from "express";
import { body, oneOf } from "express-validator";
import { handleInputErrors } from "./modules/middleware";
import { createProduct, deleteProduct, getOneProduct, getProducts } from "./handlers/product";
import { createUpdate, deleteUpdate, getOneUpdate, getUpdates, updateUpdate } from "./handlers/update";

const router = Router();
/**
 * Product
 */
router.get("/product", getProducts);

router.get("/product/:id", getOneProduct);

router.post("/product", body("name").isString(), handleInputErrors, createProduct);

router.put("/product/:id", body("name").isString(), handleInputErrors, (req, res) => {});

router.delete("/product/:id", deleteProduct);

/**
 * Update
 */

router.get("/update", getUpdates);

router.get("/update/:id", getOneUpdate);

router.put(
  "/update/:id",
  body("title").optional(),
  body("body").optional(),
  body("status").isIn(["IN_PROGRESS", "SHIPPED", "DEPRECATED"]).optional(),
  body("version").optional(),
  handleInputErrors,
  updateUpdate
);

router.post(
  "/update/",
  body("title").isString(),
  body("body").isString(),
  body("productId").exists().isString(),
  handleInputErrors,
  createUpdate
);

router.delete("/update/:id", deleteUpdate);

/**
 * UpdatePoint
 */

router.get("/updatepoint", (req, res) => {});

router.get("/updatepoint/:id", (req, res) => {});

router.post(
  "/updatepoint",
  body("name").isString(),
  body("description").isString(),
  body("updateId").isString(),
  handleInputErrors,
  (req, res) => {}
);

router.put("/updatepoint/:id", body("name").optional(), body("description").optional(), handleInputErrors, (req, res) => {});

router.delete("/updatepoint/:id", (req, res) => {});

export default router;
