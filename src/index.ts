#!/usr/bin/env node

import migrateCRAToVite from "./cra";

async function runCodemod() {
	const codemod = process.argv[2] as "cra";
	if (!codemod)
		throw new Error("Please specify a codemod. I.E: npx migrate-to-vite cra");
	if (codemod === "cra") return migrateCRAToVite();
	throw new Error("We don't support that codemod yet.");
}

runCodemod();
