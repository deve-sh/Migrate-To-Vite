const fs = require("node:fs");

fs.copyFileSync("LICENSE", "./dist/LICENSE");
fs.copyFileSync("README.md", "./dist/README.md");
fs.copyFileSync("package.json", "./dist/package.json");
