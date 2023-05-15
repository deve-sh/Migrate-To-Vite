import { execSync } from "child_process";
import chalk from "chalk";

interface Args {
	packageManager: "npm" | "yarn" | "pnpm";
}

const devDependenciesToInstall = [
	"vite",
	"eslint-plugin-react-app",
	"@vitejs/plugin-react-swc",
];
const dependenciesToInstall = [];

const installAllDependencies = ({ packageManager }: Args) => {
	chalk.blue("Installing dependencies");
	const installCommandBase =
		packageManager === "npm"
			? "npm install"
			: packageManager === "yarn"
			? "yarn add"
			: "pnpm install";
	const devInstallCommandOption =
		packageManager === "npm" || packageManager === "pnpm" ? "--save-dev" : "-D";
	if (devDependenciesToInstall.length)
		execSync(
			`${installCommandBase} ${devInstallCommandOption} ${devDependenciesToInstall.join(
				" "
			)}`
		);
	if (dependenciesToInstall.length)
		execSync(`${installCommandBase} ${dependenciesToInstall.join(" ")}`);
};

export default installAllDependencies;
