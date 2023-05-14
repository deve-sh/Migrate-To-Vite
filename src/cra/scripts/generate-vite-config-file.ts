import fs from "node:fs";
import path from "node:path";
import chalk from 'chalk';

const viteConfigFileTemplate = () => `import { defineConfig } from 'vite';
import path from 'node:path';
import react from '@vitejs/plugin-react-swc';

export default defineConfig(() => {
	return {
		envPrefix: 'REACT_APP_',
		cacheDir: '.vite',
		build: {
			outDir: 'build',
			sourcemap: false,
		},
		server: {
			open: true,
			port: process.env.PORT || 3000,
		},
		define: {
			'process.env': {
				NODE_ENV: process.env.NODE_ENV
			},
		},
		resolve: {
			alias: {
				// Add your code aliases here, like you would in jsconfig or tsconfig files if not already done
			},
		},
		plugins: [react()],
	};
});`;

const generateViteConfigFile = () => {
	chalk.blue("Generating Vite Config File");
	fs.writeFileSync(
		path.resolve(process.cwd(), "./vite.config.js"),
		viteConfigFileTemplate()
	);
};

export default generateViteConfigFile;
