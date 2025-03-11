"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.keywordHandler = void 0;
const keywordHandler = (req, resp) => {
    console.log("Attempting Search");
    const msg = req.query.Key1 || "";
    // resp.write(readFileSync("static/keywordfile3"));
    // resp.end();
};
exports.keywordHandler = keywordHandler;
