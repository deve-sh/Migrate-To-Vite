import fs from "fs";
import recursive from "recursive-readdir";
import chalk from "chalk";

interface Args {
	root: string;
}

const findAndReplaceEnvVariables = async ({ root }: Args) => {
	console.log(chalk.blue("Finding and replacing any environment variables"));
	const files = await recursive(root);
	files.forEach((file) => {
		const isNotJSFile = !file.includes(".ts") && !file.includes(".js");
		const isDirectory = fs.statSync(file).isDirectory();
		if (isDirectory || isNotJSFile) return;
		let content = fs.readFileSync(file, "utf-8");
		content = content.replace(
			/process.env.REACT_APP_/g,
			"import.meta.env.REACT_APP_"
		);
		content = content.replace(/process.env.NODE_ENV/g, "import.meta.env.MODE");
		fs.writeFileSync(file, content);
	});
};

export default findAndReplaceEnvVariables;
