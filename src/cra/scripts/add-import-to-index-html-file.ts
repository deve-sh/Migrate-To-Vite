import fs from "node:fs";
import path from "node:path";

interface Args {
	root: string;
}

const addImportToIndexHTMLFile = ({ root }: Args) => {
	const htmlContent = fs.readFileSync(path.resolve(process.cwd(), "./index.html"), "utf-8");
	// TODO: Add a script tag referencing the index.(ts/js/tsx/jsx) file in the root directory.
	const tag = `<script type=""></script>`;
};

export default addImportToIndexHTMLFile;
