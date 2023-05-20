import fs from "fs";
import path from "path";

const removePublicURLFromIndexHTMLFile = () => {
	const updatedContent = fs
		.readFileSync(path.resolve(process.cwd(), "./index.html"), "utf-8")
		.replace(/%PUBLIC_URL%/g, "");
	fs.writeFileSync(path.resolve(process.cwd(), "./index.html"), updatedContent);
};

export default removePublicURLFromIndexHTMLFile;
