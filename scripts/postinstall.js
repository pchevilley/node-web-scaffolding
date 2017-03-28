#!/usr/local/bin/node
var fs = require("fs"),
    path = require("path");

fs.rename("../node-web-scaffolding", "../../node-web-scaffolding", (error, data) => {
    if (error) {
        console.error("Error moving node-web-scaffolding to working directory");
    }

    fs.rmdir("../../node_modules", (error) => {
        if (error) {
            console.log("Directory node_modules not empty, Skipping removal.");
        }
    });
});
