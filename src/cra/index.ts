import chalk from "chalk";

import receiveCLIArgs from "./cli";

import moveIndexHTMLFile from "./scripts/move-index-html-file";
import removePublicURLFromIndexHTMLFile from "./scripts/remove-public-url-from-index-html-file";
import addSourceImportToIndexHTMLFile from "./scripts/add-import-to-index-html-file";
import renameFilesContainingReact from "./scripts/rename-files-containing-react";
import generateViteConfigFile from "./scripts/generate-vite-config-file";
import findAndReplaceEnvVariables from "./scripts/find-and-replace-env";
import updateGitIgnore from "./scripts/update-gitignore";
import updatePackageJSON from "./scripts/update-package-json";
import installAllDependencies from "./scripts/install-all-dependencies";
import updateTSConfigFile from "./scripts/update-tsconfig";
import addAllChangesToBeCommitted from "./scripts/add-all-changes-to-be-commited";

async function migrateCRAToVite() {
	const {
		shouldRenameFileExtensionsWithReact,
		rootDir: root,
		packageManager,
	} = await receiveCLIArgs();

	if (!root) throw new Error("Source files directory is required");

	console.log(chalk.green.bold("Starting Migration to Vite"));
	console.log(
		chalk.yellow.bold(
			"Don't terminate this session until the process is complete."
		)
	);

	generateViteConfigFile();
	moveIndexHTMLFile();
	removePublicURLFromIndexHTMLFile();
	if (shouldRenameFileExtensionsWithReact)
		await renameFilesContainingReact({ root });
	await findAndReplaceEnvVariables({ root });
	addSourceImportToIndexHTMLFile({ root });
	updateGitIgnore();
	updatePackageJSON();
	installAllDependencies({ packageManager });
	updateTSConfigFile();
	// Add changes to git stage
	addAllChangesToBeCommitted();
	console.log(chalk.green.bold("Migration to Vite is complete"));
	console.log(
		chalk.blueBright(
			"There might be additional steps that might be needed post this step. Check https://github.com/deve-sh/Migrate-to-Vite/blob/main/src/cra/README.md#ran-the-codemod-what-else-do-i-need-to-do for details."
		)
	);
}

export default migrateCRAToVite;
