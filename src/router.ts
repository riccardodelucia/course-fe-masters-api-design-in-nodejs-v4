import { error } from "console";
import { Router } from "express";
import { body, oneOf } from "express-validator";
import { handleInputErrors } from "./modules/middleware";

const router = Router();
/**
 * Product
 */
router.get("/product", (req, res) => {
  res.json({ message: "product" });
});

router.get("/product/:id", (req, res) => {});

router.post("/product", body("name").isString(), handleInputErrors, (req, res) => {});

router.put("/product/:id", body("name").isString(), handleInputErrors, (req, res) => {});

router.delete("/product/:id", (req, res) => {});

/**
 * Update
 */

router.get("/update", (req, res) => {});

router.get("/update/:id", (req, res) => {});

router.put(
  "/update/:id",
  body("title").optional(),
  body("body").optional(),
  body("status").isIn(["IN_PROGRESS", "SHIPPED", "DEPRECATED"]),
  body("version").optional(),
  handleInputErrors,
  (req, res) => {}
);

router.put("/update/", body("title").isString(), body("body").isString(), handleInputErrors, (req, res) => {});

router.delete("/update/:id", (req, res) => {});

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
