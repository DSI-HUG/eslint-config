import type { Linter } from 'eslint';

export interface HugConfig<T = Linter.Config[]> {
    readonly configs: {
        readonly recommended: Promise<T>;
        readonly moderate: Promise<T>;
    };
}
