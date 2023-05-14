import fs from "node:fs";
import recursive from "recursive-readdir";

interface Args {
	root: string;
}

const findAndReplaceEnvVariables = async ({ root }: Args) => {
	const files = await recursive(root, [
		(file, stat) =>
			stat.isDirectory() || (!file.endsWith(".tsx") && !file.endsWith(".jsx")),
	]);
	files.forEach((file) => {
		const content = fs.readFileSync(file, "utf-8");
		fs.writeFileSync(
			file,
			content.replace("process.env.REACT_APP_", "import.meta.env.REACT_APP_")
		);
	});
};

export default findAndReplaceEnvVariables;
