import { defineConfig } from "tsup";

export default defineConfig({
	entry: {
		index: "src/index.ts",
		cra: "src/cra/index.ts",
		// Add more as other framework/tooling migrations are added
	},
	splitting: true,
	sourcemap: false,
	clean: true,
	minify: true,
});
