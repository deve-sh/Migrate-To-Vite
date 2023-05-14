import receiveCLIArgs from "./cli";

import moveIndexHTMLFile from "./scripts/move-index-html-file";
import addImportToIndexHTMLFile from "./scripts/add-import-to-index-html-file";
import renameFilesContainingReact from "./scripts/rename-files-containing-react";
import generateViteConfigFile from "./scripts/generate-vite-config-file";
import findAndReplaceEnvVariables from "./scripts/find-and-replace-env";
import updateGitIgnore from "./scripts/update-gitignore";
import updatePackageJSON from "./scripts/update-package-json";

async function migrateCRAToVite() {
	const { shouldRenameFileExtensionsWithReact, rootDir: root } =
		await receiveCLIArgs();

	if (!root) throw new Error("Source files directory is required");

	generateViteConfigFile();
	moveIndexHTMLFile();
	addImportToIndexHTMLFile({ root });
	if (shouldRenameFileExtensionsWithReact)
		await renameFilesContainingReact({ root });
	await findAndReplaceEnvVariables({ root });
    updateGitIgnore();
    updatePackageJSON();
}

migrateCRAToVite();
