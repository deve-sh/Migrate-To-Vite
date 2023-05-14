import Enquirer from "enquirer";

const enquirer = new Enquirer();

const receiveCLIArgs = async () => {
	const questions = [
		{
			type: "input",
			name: "rootDir",
			message: "Enter the name of the directory with the source code. Default: ./src",
			initial: "./src",
		},
		{
			type: "confirm",
			name: "shouldRenameFileExtensionsWithReact",
			message:
				"Rename file extensions to .jsx/.tsx that contain React code? Vite requires this",
			initial: "",
		},
	];
	const answers = await enquirer.prompt(questions);
	return answers;
};

export default receiveCLIArgs;
