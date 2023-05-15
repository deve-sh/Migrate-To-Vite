import Enquirer from "enquirer";

const enquirer = new Enquirer();

interface CLIArgs {
	rootDir: string;
	shouldRenameFileExtensionsWithReact: boolean;
	packageManager: "npm" | "yarn" | "pnpm";
}

const receiveCLIArgs = async (): Promise<CLIArgs> => {
	const questions = [
		{
			type: "input",
			name: "rootDir",
			message:
				"Enter the name of the directory with the source code. Default: ./src",
			initial: "./src",
		},
		{
			type: "confirm",
			name: "shouldRenameFileExtensionsWithReact",
			message:
				"Rename file extensions to .jsx/.tsx that contain React code? Vite requires this",
			initial: true,
		},
		{
			type: "autocomplete",
			name: "packageManager",
			message: "The package manager you use",
			initial: 0,
			choices: ["npm", "yarn", "pnpm"],
		},
	];
	const answers = (await enquirer.prompt(questions)) as CLIArgs;
	if (!answers.rootDir.startsWith("./"))
		throw new Error(
			"Source code directory path should be a relative path. I.E: Start with ./"
		);
	return answers;
};

export default receiveCLIArgs;
