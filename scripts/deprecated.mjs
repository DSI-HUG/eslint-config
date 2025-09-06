import chalk from 'chalk';
import { findUpSync } from 'find-up';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const checkFile = (filename, moreInfoUrl) => {
    const file = findUpSync(filename, { cwd: __dirname });
    if (file) {
        console.log(`${chalk.yellow.bold('@hug/eslint-config')}: ${chalk.yellow(`the use of ${chalk.underline(filename)} file is deprecated.`)}`);
        console.log(chalk.yellow(`-> This file can be safely removed: ${file}`));
        console.log(chalk.yellow(`-> More info: ${moreInfoUrl}`));
    }
};

checkFile('tsconfig.eslint.json', 'https://typescript-eslint.io/blog/announcing-typescript-eslint-v8#project-service');
checkFile('.eslintignore', 'https://eslint.org/docs/latest/use/configure/ignore-deprecated');
