"use strict";
// Thomas McLaughlin
// Nicholas Smith
// Server Logic and Routing.
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const http_1 = require("http");
const express_1 = __importDefault(require("express"));
const handler_1 = require("./handler");
const javascriptHandler_1 = require("./javascriptHandler");
const keywordHandler_1 = require("./keywordHandler");
const port = 3001;
const expressApp = (0, express_1.default)();
expressApp.get("/favicon.ico", (req, resp) => {
    resp.statusCode = 404;
    resp.end();
});
expressApp.get("/search.js", javascriptHandler_1.javascriptHandler);
expressApp.get("/keyword", keywordHandler_1.keywordHandler);
expressApp.get("*", handler_1.basicHandler);
const server = (0, http_1.createServer)(expressApp);
server.listen(port, () => console.log(`HTTP Server listening on port ${port}`));
