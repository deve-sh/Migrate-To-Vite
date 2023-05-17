import fs from "node:fs";
import recursive from "recursive-readdir";

interface Args {
	root: string;
}

const renameFilesContainingReact = async ({ root }: Args) => {
	console.log("Renaming files containing JSX");
	const files = await recursive(root, [
		(file, stat) =>
			stat.isDirectory() || (!file.endsWith(".ts") && !file.endsWith(".js")),
	]);
	files.forEach((file) => {
		const content = fs.readFileSync(file, "utf-8");
		if (content.indexOf("import React") !== -1) fs.renameSync(file, file + "x");
	});
};

export default renameFilesContainingReact;
