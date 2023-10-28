"use strict";

const colors = require("colors");
const http = require("http");

class Uptimer {
  constructor(options = {}) {
    this.port = options.port || 3000;
    this.path = options.path || "/";
    this.message = options.message || "This message can be configured.";
    this.debug = options.debug || false;
    this.startServer();
  }
  requestHandler(req, res) {
    if (this.debug) {
      console.log(
        `${colors.green.bold(`:: debug :: [@node/replit-uptimer] => ${req.method.toLowerCase()} ${req.url}`)}`
      );
    }
    if (req.url === this.path) {
      res.writeHead(200, { "Content-Type": "text/plain" });
      res.end(this.message);
    } else {
      res.writeHead(404, { "Content-Type": "text/plain" });
      res.end("Not Found");
    }
  }
  startServer() {
    const server = http.createServer(this.requestHandler.bind(this));
    server.listen(this.port, () => {
      console.log(
        `${colors.green.bold(`:: info :: [@node/replit-uptimer] => Online server in the port: ${this.port}`)}`
      );
    });
  }
}

module.exports = Uptimer;
