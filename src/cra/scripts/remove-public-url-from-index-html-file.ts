import fs from "node:fs";
import path from "node:path";
import prettier from "prettier";

const removePublicURLFromIndexHTMLFile = () => {
	const updatedContent = fs
		.readFileSync(path.resolve(process.cwd(), "./index.html"), "utf-8")
		.replace(/%PUBLIC_URL%/g, "");
	fs.writeFileSync(
		path.resolve(process.cwd(), "./index.html"),
		prettier.format(updatedContent)
	);
};

export default removePublicURLFromIndexHTMLFile;
