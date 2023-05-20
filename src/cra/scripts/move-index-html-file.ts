import fs from "fs";
import path from "path";
import chalk from "chalk";

const moveIndexHTMLFile = () => {
	console.log(chalk.blue("Moving index.html file"));
	fs.cpSync(
		path.resolve(process.cwd(), "./public/index.html"),
		path.resolve(process.cwd(), "index.html")
	);
	fs.rmSync(path.resolve(process.cwd(), "./public/index.html"));
};

export default moveIndexHTMLFile;
