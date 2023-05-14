import Enquirer from "enquirer";

const enquirer = new Enquirer();

interface CLIArgs {
	rootDir: string;
	shouldRenameFileExtensionsWithReact: boolean;
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
	];
	const answers = await enquirer.prompt(questions);
	return answers as CLIArgs;
};

export default receiveCLIArgs;
