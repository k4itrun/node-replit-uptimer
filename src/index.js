"use strict";

const name = "[@replit/uptimer]";
const colors = require("colors");
const { createServer } = require("node:http");

function config(options = {}) {
 const port = options.port;
 let createURL = options.path ? options.path.toString() : "/";
 let createResponse = options.message ? options.message.toString() : "This message can be configured.";
 const request = async (req, res) => {
  if (options.debug) console.log(`${colors.green.bold(`:: debug :: ${name} => ${req.method.toLowerCase()} ${req.url}`)}`);
  if (req.url === createURL) { res.writeHead(200); return res.end(createResponse); }
 };

 const server = createServer(request);
 server.listen(port, () => { if (options.debug) console.log(`${colors.green.bold(`:: debug :: ${name} => Online server in the port: ${port}`)}`);});
}

console.log(`${colors.green.bold(`:: server :: ${name} => online`)}`);

module.exports = {
 config // => Soon more...
};
