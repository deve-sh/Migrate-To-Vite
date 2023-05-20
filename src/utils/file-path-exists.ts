import fs from "fs";

const filePathExists = (path: string) => {
	return fs.existsSync(path);
};

export default filePathExists;
