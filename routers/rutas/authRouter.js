var express = require("express");
var AuthRouter = express.Router();
var BD = require("../../db");

AuthRouter.route("/").post(async function(req, res) {
    res.header("Content-Type", "application/json; charset=utf-8"); 
    console.log(req.body)
    BD.AuthModel.getToken(req, res);
});

module.exports = AuthRouter;
