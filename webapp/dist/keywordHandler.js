"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.keywordHandler = void 0;
const keywordHandler = (req, resp) => {
    console.log("Serving keyword");
    const msg = req.params.message ?? "(No Message)";
    resp.send(`Hello, ${msg}`);
    // resp.write(readFileSync("static/keywordfile3"));
    // resp.end();
};
exports.keywordHandler = keywordHandler;
