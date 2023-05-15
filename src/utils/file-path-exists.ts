import fs from "node:fs";

const filePathExists = (path: string) => {
	return fs.existsSync(path);
};

export default filePathExists;
