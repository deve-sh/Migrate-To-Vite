import fs from "fs";
import recursive from "recursive-readdir";
import chalk from "chalk";

interface Args {
	root: string;
}

const findAndReplaceEnvVariables = async ({ root }: Args) => {
	console.log(chalk.blue("Finding and replacing any environment variables"));
	const files = await recursive(root, [
		(file, stat) =>
			stat.isDirectory() || (!file.endsWith(".tsx") && !file.endsWith(".jsx")),
	]);
	files.forEach((file) => {
		let content = fs.readFileSync(file, "utf-8");
		content = content.replace(
			"process.env.REACT_APP_",
			"import.meta.env.REACT_APP_"
		);
		content = content.replace("process.env.NODE_ENV", "import.meta.env.MODE");
		fs.writeFileSync(file, content);
	});
};

export default findAndReplaceEnvVariables;
