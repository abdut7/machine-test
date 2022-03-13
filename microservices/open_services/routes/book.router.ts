import express from "express";
import {
    makeController
} from "../../../libs/core/helpers";
import {
    getBookListController
} from "../../../libs/book";
const router = express.Router();
router.post("/get_book", makeController(getBookListController));
module.exports = router;