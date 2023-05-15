import chalk from "chalk";

import receiveCLIArgs from "./cli";

import moveIndexHTMLFile from "./scripts/move-index-html-file";
import addImportToIndexHTMLFile from "./scripts/add-import-to-index-html-file";
import renameFilesContainingReact from "./scripts/rename-files-containing-react";
import generateViteConfigFile from "./scripts/generate-vite-config-file";
import findAndReplaceEnvVariables from "./scripts/find-and-replace-env";
import updateGitIgnore from "./scripts/update-gitignore";
import updatePackageJSON from "./scripts/update-package-json";
import addAllChangesToBeCommitted from "./scripts/add-all-changes-to-be-commited";
import installAllDependencies from "./scripts/install-all-dependencies";

async function migrateCRAToVite() {
	const {
		shouldRenameFileExtensionsWithReact,
		rootDir: root,
		packageManager,
	} = await receiveCLIArgs();

	if (!root) throw new Error("Source files directory is required");

	chalk.blue.bold("Starting Migration to Vite");
	chalk.yellow.bold("Don't terminate this session until the process is complete.");

	generateViteConfigFile();
	moveIndexHTMLFile();
	addImportToIndexHTMLFile({ root });
	if (shouldRenameFileExtensionsWithReact)
		await renameFilesContainingReact({ root });
	await findAndReplaceEnvVariables({ root });
	installAllDependencies({ packageManager });
	updateGitIgnore();
	updatePackageJSON();
	addAllChangesToBeCommitted();
}

migrateCRAToVite();
