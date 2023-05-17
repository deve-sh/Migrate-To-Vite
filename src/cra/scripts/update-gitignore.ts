import fs from "node:fs";
import path from "node:path";
import chalk from "chalk";

const updateGitIgnore = () => {
	try {
		console.log(chalk.blue("Updating .gitignore"));
		const gitIgnoreFilePath = path.resolve(process.cwd(), "./.gitignore");
		fs.appendFileSync(gitIgnoreFilePath, "\n# Vite related dependencies\n.vite");
	} catch (err) {
		// Handling and not exiting the process given the directory might not be a git repo
		console.error("Error updating gitignore file:", err);
	}
};

export default updateGitIgnore;
