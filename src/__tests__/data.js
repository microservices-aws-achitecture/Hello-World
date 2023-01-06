"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.data = void 0;
const dataBase_1 = require("./dataBase");
const data = dataBase_1.data;
exports.data = data;
data.body = JSON.stringify({ content: "Hola" });
