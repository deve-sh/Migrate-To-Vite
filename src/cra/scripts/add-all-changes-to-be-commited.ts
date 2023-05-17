import { execSync } from "child_process";
import chalk from "chalk";

const addAllChangesToBeCommitted = () => {
	try {
		console.log(chalk.blue("Adding all changes to git stage for committing"));
		execSync("git add .", { stdio: "inherit" });
	} catch {
		// Might not be a git repo
	}
};

export default addAllChangesToBeCommitted;
