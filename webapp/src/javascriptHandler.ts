import { IncomingMessage, ServerResponse } from "http";
import { readFileSync } from "fs";
export const javascriptHandler = (req: IncomingMessage, resp: ServerResponse) => {
    console.log("Serving search.js")
    resp.write(readFileSync("static/search.js"));
    resp.end();
};