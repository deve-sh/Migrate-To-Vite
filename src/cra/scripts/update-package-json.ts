import fs from "fs";
import path from "path";
import chalk from "chalk";

const updatePackageJSON = () => {
	console.log(chalk.blue("Updating package.json"));
	const packageJSONContents = fs.readFileSync(
		path.resolve(process.cwd(), "./package.json"),
		"utf-8"
	);
	const packageJSON = JSON.parse(packageJSONContents);

	delete packageJSON.dependencies["react-scripts"];
	delete packageJSON.dependencies["craco"];
	delete packageJSON.scripts["eject"];

	packageJSON.scripts["start"] = packageJSON.scripts["start"].replace(
		/(react-scripts|craco) start/,
		"vite --host"
	);
	packageJSON.scripts["build"] = packageJSON.scripts["build"].replace(
		/(react-scripts|craco) build/,
		"vite build"
	);
	fs.writeFileSync(
		path.resolve(process.cwd(), "./package.json"),
		JSON.stringify(packageJSON, null, 2)
	);
};

export default updatePackageJSON;
