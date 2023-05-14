import receiveCLIArgs from './cli';

import moveIndexHTMLFile from './scripts/move-index-html-file';
import addImportToIndexHTMLFile from './scripts/add-import-to-index-html-file';
import renameFilesContainingReact from './scripts/rename-files-containing-react';

import generateViteConfigFile from './scripts/generate-vite-config-file';

receiveCLIArgs();
generateViteConfigFile();