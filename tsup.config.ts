import { defineConfig } from "tsup";

export default defineConfig({
	entry: {
		cra: "src/cra/index.ts",
		// Add more as other framework/tooling migrations are added
	},
	splitting: true,
	sourcemap: true,
	clean: true,
	minify: true,
});
