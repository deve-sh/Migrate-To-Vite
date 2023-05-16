import chalk from "chalk";
import { execSync } from "child_process";

const runPrettierOnAffectedFiles = () => {
	try {
        chalk.blue('Running prettier on all affected files');
		execSync("npx -p prettier@latest -p pretty-quick pretty-quick");
	} catch {}
};

export default runPrettierOnAffectedFiles;
