import receiveCLIArgs from "./cli";

import moveIndexHTMLFile from "./scripts/move-index-html-file";
import addImportToIndexHTMLFile from "./scripts/add-import-to-index-html-file";
import renameFilesContainingReact from "./scripts/rename-files-containing-react";

import generateViteConfigFile from "./scripts/generate-vite-config-file";

async function migrateCRAToVite() {
	const { shouldRenameFileExtensionsWithReact, rootDir } =
		await receiveCLIArgs();

	if (!rootDir) throw new Error("Source files directory is required");
	const options = { root: rootDir };

	generateViteConfigFile();
	moveIndexHTMLFile();
	addImportToIndexHTMLFile(options);
	if (shouldRenameFileExtensionsWithReact) renameFilesContainingReact(options);
}

migrateCRAToVite();
