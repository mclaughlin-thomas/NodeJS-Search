import { createServer } from "http";
import express, { Express } from "express";
import { basicHandler } from "./handler";
import { javascriptHandler } from "./javascriptHandler";

const port = 5000;
const expressApp: Express = express();

expressApp.get("/favicon.ico", (req, resp) => {
    resp.statusCode = 404;
    resp.end();
});
expressApp.get("/search.js", javascriptHandler);
expressApp.get("*", basicHandler);

const server = createServer(expressApp);

server.listen(port,() =>
    console.log(`HTTP Server listening on port ${port}`)
);
