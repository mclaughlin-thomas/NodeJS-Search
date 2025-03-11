import { IncomingMessage, ServerResponse } from "http";
import { readFileSync } from "fs";
export const basicHandler = (req: IncomingMessage, resp: ServerResponse) => {
    console.log("Serving index.html");
    resp.write(readFileSync("static/index.html"));
    resp.end();
};