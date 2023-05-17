import fs from "node:fs";
import path from "node:path";
import chalk from "chalk";

const moveIndexHTMLFile = () => {
	chalk.blue("Moving index.html file");
	fs.cpSync(
		path.resolve(process.cwd(), "./public/index.html"),
		path.resolve(process.cwd(), "index.html")
	);
	fs.rmSync(path.resolve(process.cwd(), "./public/index.html"));
};

export default moveIndexHTMLFile;
