"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express")); // ES2020 syntex
const app = (0, express_1.default)();
//Req, res shoud be from express
app.get("/", (req, res) => {
    return res.status(200).send("ok");
});
app.listen(4000, () => {
    console.log("http://localhost:4000");
});
