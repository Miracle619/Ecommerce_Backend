const { check, validationResult } = require("express-validator");

exports.validateSignupRequest = [
  check("firstName").notEmpty().withMessage("firstName is required"),
  check("LastName").notEmpty().withMessage("LastName is required"),
  check("email").isEmail().withMessage("Please Enter Valid Email"),
  check("password")
    .isLength({ min: 6 })
    .withMessage("Password must be of min 6 character long"),
];

exports.validateSigninRequest = [
  check("email").isEmail().withMessage("Please Enter Valid Email"),
  check("password")
    .isLength({ min: 6 })
    .withMessage("Password must be of min 6 character long"),
];

exports.isRequestValidated = (req, res, next) => {
  const errors = validationResult(req);

  if (errors.array().length > 0) {
    return res.status(400).json({ error: errors.array()[0].msg });
  }
  next();
};
