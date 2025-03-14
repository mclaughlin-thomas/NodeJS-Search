// Thomas McLaughlin
// Nicholas Smith
// Handler for html's needed javascript

import { IncomingMessage, ServerResponse } from "http";
import { readFileSync } from "fs";
export const javascriptHandler = (req: IncomingMessage, resp: ServerResponse) => {
    console.log("Serving search.js")
    
    resp.setHeader("Content-Type", "application/javascript");
    
    resp.write(readFileSync("static/search.js"));
    resp.end();
};
