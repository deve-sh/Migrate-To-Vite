import fs from "fs";
import chalk from "chalk";

const addToArrayIfNotExists = (
	obj: Record<string, any>,
	arrayKey: string,
	toAdd: any
) => {
	if (!obj[arrayKey]) obj[arrayKey] = [];
	if (!obj[arrayKey].includes(toAdd)) obj[arrayKey].push(toAdd);
};

const updateTSConfigFile = () => {
	try {
		console.log(chalk.blue("Updating tsconfig.json"));
		const tsConfigJSON = fs.readFileSync("./tsconfig.json", "utf-8");
		const tsConfig = JSON.parse(tsConfigJSON);
		tsConfig.compilerOptions = {
			...tsConfig.compilerOptions,
			target: "ESNext",
		};
		addToArrayIfNotExists(tsConfig.compilerOptions, "types", "vite/client");
		addToArrayIfNotExists(
			tsConfig.compilerOptions,
			"types",
			"vite-plugin-svgr/client"
		);
		addToArrayIfNotExists(tsConfig.compilerOptions, "lib", "dom");
		addToArrayIfNotExists(tsConfig.compilerOptions, "lib", "dom.iterable");
		addToArrayIfNotExists(tsConfig.compilerOptions, "lib", "esnext");
		fs.writeFileSync("./tsconfig.json", JSON.stringify(tsConfig, null, 2));
	} catch {
		// Might not have a tsconfig.json file
	}
};

export default updateTSConfigFile;
