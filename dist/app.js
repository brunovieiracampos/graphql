"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express = require("express");
class App {
    constructor() {
        this.express = express();
    }
    middleware() {
        this.express.use('/hello', (req, res, next) => {
        });
    }
}
