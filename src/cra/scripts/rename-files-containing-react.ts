import fs from "fs";
import recursive from "recursive-readdir";
import chalk from "chalk";

interface Args {
	root: string;
}

const renameFilesContainingReact = async ({ root }: Args) => {
	console.log(chalk.blue("Renaming files containing JSX"));
	const files = await recursive(root);
	files.forEach((file) => {
		const isNotJSFile = !file.endsWith(".ts") && !file.endsWith(".js");
		const isDirectory = fs.statSync(file).isDirectory();
		if (isDirectory || isNotJSFile) return;
		
		const content = fs.readFileSync(file, "utf-8");
		if (content.includes("import React")) return fs.renameSync(file, file + "x");
		if (content.includes("</")) return fs.renameSync(file, file + "x");
		if (content.includes("/>")) return fs.renameSync(file, file + "x");
	});
};

export default renameFilesContainingReact;
