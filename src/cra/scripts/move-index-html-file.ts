import fs from "node:fs";
import path from "node:path";

const moveIndexHTMLFile = () => {
	fs.cpSync(path.resolve(process.cwd(), "./public/index.html"), process.cwd());
	fs.rmSync(path.resolve(process.cwd(), "./public/index.html"));
};

export default moveIndexHTMLFile;
