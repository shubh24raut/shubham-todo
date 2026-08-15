import { body, validationResult } from "express-validator";
import { TOTO_ENUMS } from "../enums/todoEnums.js";

export const todoValidationRules = [
  body("title")
    .trim()
    .notEmpty()
    .withMessage("Title is required")
    .isLength({ max: 100 })
    .withMessage("Title must be 100 characters or fewer"),
  body("desc")
    .trim()
    .notEmpty()
    .withMessage("Description is required")
    .isLength({ max: 500 })
    .withMessage("Description must be 500 characters or fewer"),
  body("status")
    .optional()
    .default(TOTO_ENUMS.TODO)
    .isIn(Object.values(TOTO_ENUMS))
    .withMessage(`Status must be one of: ${Object.values(TOTO_ENUMS).join(", ")}`),
];

export const validateTodo = (req, res, next) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(422).json({
      success: false,
      errors: errors.array().map((error) => ({
        field: error.param,
        message: error.msg,
      })),
    });
  }

  next();
};
