"use strict";
// Thomas McLaughlin
// Nicholas Smith
// Default handler to serve html
Object.defineProperty(exports, "__esModule", { value: true });
exports.basicHandler = void 0;
const fs_1 = require("fs");
const basicHandler = (req, resp) => {
    console.log("Serving index.html");
    resp.write((0, fs_1.readFileSync)("static/index.html"));
    resp.end();
};
exports.basicHandler = basicHandler;
