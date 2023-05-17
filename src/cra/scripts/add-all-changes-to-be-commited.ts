import { execSync } from "child_process";

const addAllChangesToBeCommitted = () => {
	try {
		console.log("Adding all changes to git stage for committing");
		execSync("git add .", { stdio: "inherit" });
	} catch {
		// Might not be a git repo
	}
};

export default addAllChangesToBeCommitted;
