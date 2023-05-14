import fs from "node:fs";
import path from "node:path";

const updatePackageJSON = () => {
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
		"vite"
	);
	packageJSON.scripts["build"] = packageJSON.scripts["build"].replace(
		/(react-scripts|craco) build/,
		"vite build"
	);
};

export default updatePackageJSON;
