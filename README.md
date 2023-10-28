# node-replit-uptimer
<a href="https://teamarcades.xyz/dc" target="_blank"><img src="https://discord.com/api/guilds/935157109761388554/widget.png?style=banner2" alt="Join our discord" width="256"></a><br>
**Support:** [https://teamarcades.xyz/dc](https://teamarcades.xyz/dc) <br>
**NPM:** [npmjs.com/package/node-replit-uptimer](https://www.npmjs.com/package/node-replit-uptimer)<br>

## Installation
- `npm i node-replit-uptimer`
- `npm i k4itrun/node-replit-uptimer`
- `yarn add node-replit-uptimer`
- `pnpm add node-replit-uptimer`
  
## Features
- No dependencies
- No configuration required
- Easy to use (only one line of code)
- At full speed!

## Examples
**no configuration**
```javascript
new (require("node-replit-uptimer"))();
```

**with configuration**
```javascript
new (require("node-replit-uptimer"))({
  port: 3000,               // Port on which the server will run
  path: "/your-path",       // Path to which the server will respond
  message: "Hello, World!", // Custom reply message
  debug: true               // Enable debug mode (optional)
});
```
- or
```javascript
const Uptimer = require("node-replit-uptimer");
const server = new Uptimer({
  port: 3000,               // Port on which the server will run
  path: "/your-path",       // Path to which the server will respond
  message: "Hello, World!", // Custom reply message
  debug: true               // Enable debug mode (optional)
});
```

## Issues
If you have any issues with the page, please create [new issues here](https://github.com/k4itrun/node-replit-uptimer/issues)

## Aid applications
When submitting a help request:

- Clone the repository.
- Create a branch from master and give it a meaningful name (for example, my-new-new-feature).
- Open a [help request](https://github.com/k4itrun/node-replit-uptimer/pulls) on [GitHub](https://github.com/) and describe the new feature or solution.
