import fs from "fs";
import recursive from "recursive-readdir";
import chalk from "chalk";

interface Args {
	root: string;
}

const renameFilesContainingReact = async ({ root }: Args) => {
	console.log(chalk.blue("Renaming files containing JSX"));
	const files = await recursive(root, [
		(file) => !file.endsWith(".ts") && !file.endsWith(".js"),
	]);
	files.forEach((file) => {
		const content = fs.readFileSync(file, "utf-8");
		if (content.includes("import React")) return fs.renameSync(file, file + "x");
		if (content.includes("</")) return fs.renameSync(file, file + "x");
		if (content.includes("/>")) return fs.renameSync(file, file + "x");
	});
};

export default renameFilesContainingReact;
