import fs from "fs";
import path from "path";
import filePathExists from "../../utils/file-path-exists";

interface Args {
	root: string;
}

const addSourceImportToIndexHTMLFile = ({ root }: Args) => {
	const indexHTMLPath = path.resolve(process.cwd(), "./index.html");
	const htmlContent = fs.readFileSync(indexHTMLPath, "utf-8");
	const indexTSXFileExists = filePathExists(
		path.resolve(process.cwd(), root, "./index.tsx")
	);
	const indexJSXFileExists = filePathExists(
		path.resolve(process.cwd(), root, "./index.jsx")
	);
	const fileToImport = indexTSXFileExists
		? "index.tsx"
		: indexJSXFileExists
		? "index.jsx"
		: "";
	if (fileToImport) {
		const tag = `<script type="module" src="${root.replace(
			".",
			""
		)}/${fileToImport}"></script>`;
		fs.writeFileSync(
			indexHTMLPath,
			htmlContent.replace("</body>", `\t\t${tag}\n\t</body>`)
		);
	} else
		throw new Error("No index.tsx/index.jsx file found in your source folder");
};

export default addSourceImportToIndexHTMLFile;
