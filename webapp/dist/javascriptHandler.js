"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.javascriptHandler = void 0;
const fs_1 = require("fs");
const javascriptHandler = (req, resp) => {
    console.log("Serving search.js");
    resp.write((0, fs_1.readFileSync)("static/search.js"));
    resp.end();
};
exports.javascriptHandler = javascriptHandler;
