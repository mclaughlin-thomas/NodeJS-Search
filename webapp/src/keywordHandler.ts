// Thomas McLaughlin
// Nicholas Smith
// Logic to search through keyword file and suggest appropriate URL.

import {Request, Response} from "express"
import { readFileSync } from "fs";

export const keywordHandler = (req: Request, resp: Response) => {
    
    console.log("Attempting Search!");
    const msg = req.query.Key1 as string;

    const keywordFile = readFileSync("static/keywordfile3", "utf-8").trim().split("\n"); // this is array!

    // Search logic
    // Check if the keywords contain the search term
    function matchSearchTerm(keywords: string, searchTerm: string): boolean {
        return keywords.toLowerCase().includes(searchTerm.toLowerCase());
    }
    
    // Generate the result link
    function generateResultLink(link: string): string {
        const updatedLink = `https://cis.stvincent.edu${link}`; // Prepending missing portion of URL!
        return `<a href="${updatedLink}" target="_blank">${updatedLink}</a><br />`;
    }
    
    // Process each entry in the keyword file
    function processEntry(entry: string, searchTerm: string): string | null {
        const [link, keywords] = entry.split('|');
        
        const isMatch = matchSearchTerm(keywords, searchTerm); // Check if the search term matches the keywords
        
        // If there is a match, we generate the result link. Otherwise, we return null
        if (isMatch) {
            return generateResultLink(link);
        } else {
            return null; // makes entire element null
        }

    }
    
    // Process entries and filter out null/empty values
    const results = keywordFile.map(entry => processEntry(entry, msg)).filter(Boolean); 
    // .map() we basically iterate through the keywordFile array
    // .filter() this just removes the null entries

    // Respond with search results
    resp.writeHead(200, { "Content-Type": "text/html" });
    if (results.length) {
        resp.write("<strong>Results:</strong><br /><br />" + results.join(""));
    } else {
        resp.write("<strong>No matches found.</strong>");
    }
    resp.end();
};
