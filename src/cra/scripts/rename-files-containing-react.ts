import fs from "node:fs";
import recursive from "recursive-readdir";

interface Args {
	root: string;
}

const renameFilesContainingReact = ({ root }: Args) => {
	recursive(
		root,
		[
			(file, stat) =>
				stat.isDirectory() || (!file.endsWith(".ts") && !file.endsWith(".js")),
		],
		(err, files) => {
			if (err) throw err;
			files.forEach((file) => {
				fs.readFile(file, "utf-8", (__, content) => {
					if (content.indexOf("import React") !== -1)
						fs.rename(file, file + "x", () => void 0);
				});
			});
		}
	);
};

export default renameFilesContainingReact;
