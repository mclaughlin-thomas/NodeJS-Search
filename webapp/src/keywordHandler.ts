// import { IncomingMessage, ServerResponse } from "http";
import {Request, Response} from "express"
import { readFileSync } from "fs";
export const keywordHandler = (req: Request, resp: Response) => {
    console.log("Attempting Search");
    const msg = req.query.Key1 as String || "";

    
    // resp.write(readFileSync("static/keywordfile3"));
    // resp.end();
};