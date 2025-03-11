import { IncomingMessage, ServerResponse } from "http";
import { readFileSync } from "fs";
export const keywordHandler = (req: IncomingMessage, resp: ServerResponse) => {
    console.log("Serving keyword");
    resp.write(readFileSync("static/keywordfile3"));
    resp.end();
};