import type { Linter } from 'eslint';

export interface HugConfig<T = Linter.FlatConfig> {
    readonly configs: {
        readonly recommended: T;
        readonly moderate: T;
    };
}

declare const hug: HugConfig<Linter.FlatConfig[]> & {
    readonly es6: HugConfig;
    readonly ts: HugConfig;
};
export = hug;
