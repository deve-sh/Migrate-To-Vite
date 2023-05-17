import { execSync } from "child_process";
import chalk from "chalk";

interface Args {
	packageManager: "npm" | "yarn" | "pnpm";
}

const devDependenciesToInstall = [
	"vite",
	"@vitejs/plugin-react-swc",
	"vite-tsconfig-paths",
	"vite-plugin-svgr",
];
const dependenciesToInstall = [];

const installAllDependencies = ({ packageManager }: Args) => {
	console.log(chalk.blue("Installing dependencies"));
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
			)}`,
			{ stdio: "inherit" }
		);
	if (dependenciesToInstall.length)
		execSync(`${installCommandBase} ${dependenciesToInstall.join(" ")}`, {
			stdio: "inherit",
		});
};

export default installAllDependencies;
