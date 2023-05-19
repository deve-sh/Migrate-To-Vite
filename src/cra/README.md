### CRA to Vite Migration

Resources:

-   [Create-React-App](https://create-react-app.dev/)
-   [Vite](https://vitejs.dev/)
-   [Good guide on migrating manually from CRA to Vite](https://cathalmacdonnacha.com/migrating-from-create-react-app-cra-to-vite), process that has been automated by this package.

### How to Migrate automatically

Navigate from your terminal to the directory your CRA project is in and run the following command:

```bash
npx migrate-to-vite@latest cra
```

This will open up a terminal Q/A session that will automatically migrate the project to the required Vite settings.

### Things that have to be done to migrate a CRA App to Vite

-   Move index.html file from public folder to root folder.
-   Create a [`vite.config.ts`](https://vitejs.dev/config/) file with fill-ins for `process.env` and an override for `PORT` and `envPrefix` properties.
-   Find and replace instances of `process.env` with `import.meta.env`.
-   Remove `react-scripts` from dependencies and installing vite and other required dependencies.
-   Update the scripts in package.json to reflect the new methods for startup, development and building the app.
-   Update the gitignore file to include ignores for vite based files.
-   Update the global declaration file/`tsconfig.json` file if exists to include an import for `vite/client` to avoid TypeScript errors in the app.

### Ran the codemod? What else do I need to do?

These are optional settings that you might have to do depending on your own

-   If you use prettier, run prettier on all the staged files to clean up changes and indentation issues.
-   Adding a postcss file if you are using a CSS preprocessor plugin like Tailwind.
-   Adding `sass` and using its plugin if you are using SASS for your CSS, support for which comes built in with CRA and Vite.
-   Migrating to `React.lazy` and `Suspense` in case you are lazy-loading components and using a library like react-loadable which might not completely work as expected with Vite.
