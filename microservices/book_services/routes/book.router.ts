import express from "express";
import {
    makeController
} from "../../../libs/core/helpers";
import {
    createBookController,
    getBookListController,
    updateBookController
} from "../../../libs/book";
const router = express.Router();
router.post("/create_book", makeController(createBookController));
router.post("/get_book", makeController(getBookListController));
router.post("/update_book", makeController(updateBookController));
module.exports = router;