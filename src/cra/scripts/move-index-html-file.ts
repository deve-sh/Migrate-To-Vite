import fs from "node:fs";
import path from "node:path";

const moveIndexHTMLFile = () => {
	console.log("Moving index.html file");
	fs.cpSync(
		path.resolve(process.cwd(), "./public/index.html"),
		path.resolve(process.cwd(), "index.html")
	);
	fs.rmSync(path.resolve(process.cwd(), "./public/index.html"));
};

export default moveIndexHTMLFile;
