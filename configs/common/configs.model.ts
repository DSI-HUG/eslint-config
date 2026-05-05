/* eslint-disable @typescript-eslint/no-empty-object-type */
/* eslint-disable @typescript-eslint/no-explicit-any */
import type { RulesConfig } from '@eslint/core';
import type { Config as ConfigObject } from 'eslint/config';

import type { Files } from './files';

// If T is a Config -> transform it to E, otherwise if T is an object -> recurse, otherwise -> leave it as is
type ConvertConfigToOptionalCreateOptions<T>
    = T extends Config<any> ? CreateOptions | false : T extends object ? { [K in keyof T]?: ConvertConfigToOptionalCreateOptions<T[K]> } : T;

export interface CreateOptions {
    files?: (string | string[])[];
    rules?: Partial<RulesConfig>;
}

export type Config<K extends string, O = CreateOptions>
    = Record<K, ConfigObject[]> & { [P in K as `create${Capitalize<P>}`]: (options?: O) => ConfigObject[] };

export interface AllConfig {
    angular: {
        ts: Config<'recommended' | 'moderate'>;
        html: Config<'recommended'>;
        accessibility: Config<'recommended' | 'moderate'>;
    };
    cypress: Config<'recommended'>;
    eslint: Config<'recommended'>;
    jsdoc: {
        js: Config<'recommended'>;
        ts: Config<'recommended'>;
    };
    json: Config<'recommended'>;
    jsonc: Config<'recommended'>;
    json5: Config<'recommended'>;
    noLoops: Config<'recommended'>;
    noSecrets: Config<'recommended'>;
    preferArrow: Config<'recommended'>;
    rxjs: Config<'recommended'>;
    rxjsAngular: Config<'recommended' | 'moderate'>;
    simpleImportSort: Config<'recommended'>;
    typescript: Config<'recommended'>;
    unusedImports: Config<'recommended'>;
    stylistic: Config<'recommended'>;
}

// Use interface instead of type just for user's read clarity.
// Because TS is resolving the type to its full definition and users don't even see the AllOptions naming.
export interface Options extends Omit<ConvertConfigToOptionalCreateOptions<AllConfig>, 'stylistic'> { }

export interface Configs {
    files: typeof Files;
    configs: Config<'recommended' | 'moderate', Options> & AllConfig;
}
