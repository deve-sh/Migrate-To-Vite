### Things that have to be done to migrate a CRA App to Vite

-   Move index.html file from public folder to root folder.
-   Create a vite.config.ts file with fill-ins for `process.env` and an override for `PORT` and `envPrefix` properties.
-   Find and replace instances of `process.env` with `import.meta.env`.
-   Remove `react-scripts` from dependencies and installing vite and other required dependencies.
-   Updating the scripts in package.json to reflect the new methods for startup, development and building the app.
-   Update the gitignore file to include ignores for vite based files.
-   Update the global declaration file if exists to include an import for `vite/client` to avoid TypeScript errors in the app.
-   Show notes to the user about other steps that might be needed in the migration like:
    -   Adding a postcss file if they are using a CSS preprocessor plugin like Tailwind
    -   Adding `sass` and using its plugin if they are using SASS, support for which comes built in.
    -   Migrating to React.lazy and Suspense in case they are using lazy-loading of components.
