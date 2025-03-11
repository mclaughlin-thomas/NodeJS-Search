// import { IncomingMessage, ServerResponse } from "http";
import {Request, Response} from "express"
import { readFileSync } from "fs";
export const keywordHandler = (req: Request, resp: Response) => {
    console.log("Attempting Search");
    const msg = req.query.Key1 as String;

    
    const keywordFile = readFileSync("static/keywordfile3", "utf-8").trim().split("\n");

    // Search logic
    const results = keywordFile
        .map(entry => {
            const [link, keywords] = entry.split('|');
            if (keywords.toLowerCase().includes(msg.toLowerCase())) {
                return `<a href="${link}" target="_blank">${link}</a><br />`;
            }
            return null;
        })
        .filter(Boolean); // Remove null entries

    // Respond with search results
    resp.writeHead(200, { "Content-Type": "text/html" });
    if (results.length) {
        resp.write("<strong>Results:</strong><br /><br />" + results.join(""));
    } else {
        resp.write("<strong>No matches found.</strong>");
    }
    resp.end();
};
