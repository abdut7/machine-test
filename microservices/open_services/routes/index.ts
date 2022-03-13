import express from "express";
let routes = express.Router();
routes.use("/book", require("./book/router"));
export default routes;