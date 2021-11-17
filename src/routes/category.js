const express = require("express");
const router = express.Router();

const { addCategory, getCategories } = require("../controller/category");
const { adminMiddleware } = require("../common-middleware");

router.post("/category/create", adminMiddleware, addCategory);
router.get("/category/getcategory", getCategories);
module.exports = router;
