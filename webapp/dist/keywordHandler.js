"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.keywordHandler = void 0;
const fs_1 = require("fs");
const keywordHandler = (req, resp) => {
    console.log("Serving keyword");
    resp.write((0, fs_1.readFileSync)("static/keywordfile3"));
    resp.end();
};
exports.keywordHandler = keywordHandler;
