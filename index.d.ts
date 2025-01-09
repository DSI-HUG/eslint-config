import type { FlatConfig } from '@typescript-eslint/utils/dist/ts-eslint';
import type { Linter } from 'eslint';

export interface HugConfig<T = Linter.Config[]> {
    readonly configs: {
        readonly recommended: Promise<T>;
        readonly moderate: Promise<T>;
    };
    overrides: {
        eslint: (rules: FlatConfig.Rules, files?: (string | string[])[]) => Linter.Config;
        typescript: (rules: FlatConfig.Rules, files?: (string | string[])[]) => Linter.Config[];
        rxjs: {
            ts: (rules: FlatConfig.Rules, files?: (string | string[])[]) => Linter.Config;
            angular: (rules: FlatConfig.Rules, files?: (string | string[])[]) => Linter.Config;
        },
        angular: {
            ts: (rules: FlatConfig.Rules, files?: (string | string[])[]) => Linter.Config[];
            html: (rules: FlatConfig.Rules, files?: (string | string[])[]) => Linter.Config[];
        },
        cypress: (rules: FlatConfig.Rules, files?: (string | string[])[]) => Linter.Config;
        noSecrets: (rules: FlatConfig.Rules, files?: (string | string[])[]) => Linter.Config;
        json: (rules: FlatConfig.Rules, files?: (string | string[])[]) => Linter.Config;
        jsonc: (rules: FlatConfig.Rules, files?: (string | string[])[]) => Linter.Config;
        json5: (rules: FlatConfig.Rules, files?: (string | string[])[]) => Linter.Config;
        noLoops: (rules: FlatConfig.Rules, files?: (string | string[])[]) => Linter.Config;
        preferArrow: (rules: FlatConfig.Rules, files?: (string | string[])[]) => Linter.Config;
        simpleImportSort: (rules: FlatConfig.Rules, files?: (string | string[])[]) => Linter.Config;
        unusedImports: (rules: FlatConfig.Rules, files?: (string | string[])[]) => Linter.Config;
    };
}
