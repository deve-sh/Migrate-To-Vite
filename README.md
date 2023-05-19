# Migrate to Vite

Codemods to help you migrate your existing codebase to Vite.

Currently available codemods:

-   [Create React App to Vite migration codemod](https://github.com/deve-sh/Migrate-to-Vite/blob/main/src/cra/README.md)

```bash
npx migrate-to-vite@latest cra
```

If you would like to contribute more codemods, feel free to fork the repo and make changes.

### Setting up locally and testing

-   Clone the git repo
-   Run the following commands from your terminal to setup real-time bundling as you change parts of code in the `src` folder:

```bash
npm i
npm run bundle-packages:watch
```

-   In another terminal, run the following commands:

```bash
cp package.json dist/package.json # or copy if you're using Windows Powershell
cd dist
npm i -g .
```

-   This will install the binaries present in `package.json` and symlink those binaries for any changes, these binaries can even be executed via `npx` now.

-   Setup a new CRA or another framework repository in a different folder, and add the `dist` folder as a dependency and run the commands necessary to test, for example: `npx migrate-to-vite cra`.
