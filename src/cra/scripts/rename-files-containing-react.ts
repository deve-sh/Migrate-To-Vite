import fs from 'node:fs';

interface Args {
    root: string;
};

const renameFilesContainingReact = ({ root }: Args) => {
    // TODO: Rename all files containing react code in them from .js/.ts to .jsx/.tsx
};

export default renameFilesContainingReact;