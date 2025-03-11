// import { IncomingMessage, ServerResponse } from "http";
import {Request, Response} from "express"
import { readFileSync } from "fs";
export const keywordHandler = (req: Request, resp: Response) => {
    console.log("Serving keyword");
    const msg = req.params.message ?? "(No Message)";
    resp.send(`Hello, ${msg}`);
    // resp.write(readFileSync("static/keywordfile3"));
    // resp.end();
};