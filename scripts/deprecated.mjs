import chalk from 'chalk';
import { findUpSync } from 'find-up';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const filename = 'tsconfig.eslint.json';
const tsconfigEslintJson = findUpSync(filename, { cwd: __dirname });
if (tsconfigEslintJson) {
    console.log(
        `${chalk.yellow.bold('@hug/eslint-config')}: ${chalk.yellow(`the use of ${chalk.underline('tsconfig.eslint.json')} file is deprecated and will be removed in next major release`)}`
    );
    console.log(chalk.yellow(`-> This file can be safely removed: ${tsconfigEslintJson}`));
    console.log(
        chalk.yellow('-> More info: https://typescript-eslint.io/blog/announcing-typescript-eslint-v8#project-service')
    );
}
