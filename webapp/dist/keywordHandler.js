"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.keywordHandler = void 0;
const fs_1 = require("fs");
const keywordHandler = (req, resp) => {
    console.log("Attempting Search");
    const msg = req.query.Key1;
    const keywordFile = (0, fs_1.readFileSync)("static/keywordfile3", "utf-8").trim().split("\n");
    // Search logic
    // check if the keywords contain the search term
    function matchSearchTerm(keywords, searchTerm) {
        return keywords.toLowerCase().includes(searchTerm.toLowerCase());
    }
    // generate the result link
    function generateResultLink(link) {
        return `<a href="${link}" target="_blank">${link}</a><br />`;
    }
    // process each entry in the keyword file
    function processEntry(entry, searchTerm) {
        const [link, keywords] = entry.split('|');
        const isMatch = matchSearchTerm(keywords, searchTerm); // Check if the search term matches the keywords
        // if there is a match, we generate the result link. Otherwise, we return null
        if (isMatch) {
            return generateResultLink(link);
        }
        else {
            return null;
        }
        //return matchSearchTerm(keywords, searchTerm) ? generateResultLink(link) : null;
    }
    // process entries and filter out null/empty values
    const results = keywordFile
        .map(entry => processEntry(entry, msg)) // we basically iterate through the keywordFile array with the .map
        .filter(Boolean); // this just removes the null entries
    // Respond with search results
    resp.writeHead(200, { "Content-Type": "text/html" });
    if (results.length) {
        resp.write("<strong>Results:</strong><br /><br />" + results.join(""));
    }
    else {
        resp.write("<strong>No matches found.</strong>");
    }
    resp.end();
};
exports.keywordHandler = keywordHandler;
