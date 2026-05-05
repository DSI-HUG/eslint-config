import angularPlugin from 'angular-eslint';
import { type Config, defineConfig } from 'eslint/config';
import tsPlugin from 'typescript-eslint';

import type { Configs, CreateOptions } from './common/configs.model';
import { Files } from './common/files';
import { isPackageInstalled } from './common/utils';


const getTsRecommendedFromPlugin = (): Config[] => {
    const recommended = angularPlugin.configs.tsRecommended.find(i => i.name === 'angular-eslint/ts-recommended');
    if (!recommended) {
        throw new Error('Plugin `angular-eslint/ts-recommended` no more compatible');
    }
    return [recommended as Config];
};

const createTsRecommended = (options?: CreateOptions | false): Config[] => {
    if (options === false) {
        return defineConfig({
            name: '@hug-eslint-config/angular/ts (disabled)',
        });
    } else if (!isPackageInstalled('@angular/core')) {
        return defineConfig({
            name: '@hug-eslint-config/angular/ts (not applicable)',
        });
    } else {
        return defineConfig(
            {
                name: '@hug-eslint-config/angular/ts/base',
                files: options?.files ?? Files.ANGULAR_TS,
                plugins: {
                    '@angular-eslint': angularPlugin.tsPlugin,
                },
                processor: angularPlugin.processInlineTemplates,
                languageOptions: {
                    parser: tsPlugin.parser,
                    sourceType: 'module',
                },
            },
            getTsRecommendedFromPlugin().map(config => {
                config.files = options?.files ?? Files.ANGULAR_TS;
                return config;
            }),
            {
                name: '@hug-eslint-config/angular/ts/recommended',
                files: options?.files ?? Files.ANGULAR_TS,
                rules: {
                // Disallow having too many lines in inline template and styles
                // http://codelyzer.com/rules/component-max-inline-declarations
                    '@angular-eslint/component-max-inline-declarations': [
                        'error',
                        {
                            template: 3,
                            styles: 3,
                            animations: 30,
                        },
                    ],

                    // Component selectors should follow given naming rules
                    // http://codelyzer.com/rules/component-selector
                    '@angular-eslint/component-selector': [
                        'error',
                        {
                            type: 'element',
                            prefix: '',
                            style: 'kebab-case',
                        },
                    ],

                    // Ensure that classes use contextual decorators in its body
                    // http://codelyzer.com/rules/contextual-decorator
                    '@angular-eslint/contextual-decorator': 'error',

                    // Directive selectors should follow given naming rules
                    // http://codelyzer.com/rules/directive-selector
                    '@angular-eslint/directive-selector': [
                        'error',
                        {
                            type: 'attribute',
                            prefix: '',
                            style: 'camelCase',
                        },
                    ],

                    // Disallow the declaration of impure pipes
                    // http://codelyzer.com/rules/no-pipe-impure
                    '@angular-eslint/no-pipe-impure': 'error',

                    // Prefer to declare @Output as readonly since they are not supposed to be reassigned
                    // http://codelyzer.com/rules/prefer-output-readonly
                    '@angular-eslint/prefer-output-readonly': 'error',

                    // Enforce component’s change detection to ChangeDetectionStrategy.OnPush
                    // http://codelyzer.com/rules/prefer-on-push-component-change-detection
                    '@angular-eslint/prefer-on-push-component-change-detection': 'error',

                    // The ./ prefix is standard syntax for relative URLs; don’t depend on Angular’s current ability to do without that prefix
                    // http://codelyzer.com/rules/relative-url-prefix
                    '@angular-eslint/relative-url-prefix': 'error',

                    // Component selector must be declared
                    // http://codelyzer.com/rules/use-component-selector
                    '@angular-eslint/use-component-selector': 'error',

                    ...options?.rules,
                },
            },
        );
    }
};

const createTsModerate = (options?: CreateOptions | false): Config[] => {
    if (options === false) {
        return defineConfig({
            name: '@hug-eslint-config/angular/ts (disabled)',
        });
    } else if (!isPackageInstalled('@angular/core')) {
        return defineConfig({
            name: '@hug-eslint-config/angular/ts (not applicable)',
        });
    } else {
        return defineConfig(
            createTsRecommended(),
            {
                name: '@hug-eslint-config/angular/ts/moderate',
                files: options?.files ?? Files.ANGULAR_TS,
                rules: {
                // Enforce component’s change detection to ChangeDetectionStrategy.OnPush
                // http://codelyzer.com/rules/prefer-on-push-component-change-detection
                    '@angular-eslint/prefer-on-push-component-change-detection': 'off',

                    ...options?.rules,
                },
            },
        );
    }
};

const getHtmlRecommendedFromPlugin = (): Config[] => {
    const recommended = angularPlugin.configs.templateRecommended.find(i => i.name === 'angular-eslint/template-recommended');
    if (!recommended) {
        throw new Error('Plugin `angular-eslint/template-recommended` no more compatible');
    }
    return [recommended as Config];
};

const createHtmlRecommended = (options?: CreateOptions | false): Config[] => {
    if (options === false) {
        return defineConfig({
            name: '@hug-eslint-config/angular/html (disabled)',
        });
    } else if (!isPackageInstalled('@angular/core')) {
        return defineConfig({
            name: '@hug-eslint-config/angular/html (not applicable)',
        });
    } else {
        return defineConfig(
            {
                name: '@hug-eslint-config/angular/html/base',
                files: options?.files ?? Files.ANGULAR_HTML,
                languageOptions: {
                    parser: angularPlugin.templateParser,
                },
                plugins: {
                    '@angular-eslint/template': angularPlugin.templatePlugin,
                },
            },
            getHtmlRecommendedFromPlugin().map(config => {
                config.files = options?.files ?? Files.ANGULAR_HTML;
                return config;
            }),
            {
                name: '@hug-eslint-config/angular/html/recommended',
                files: options?.files ?? Files.ANGULAR_HTML,
                rules: {
                    // The condition complexity shouldn’t exceed a rational limit in a template
                    // http://codelyzer.com/rules/template-conditional-complexity
                    '@angular-eslint/template/conditional-complexity': 'error',

                    // Disallow using ‘$any’ in templates.
                    // http://codelyzer.com/rules/template-no-any
                    '@angular-eslint/template/no-any': 'error',

                    ...options?.rules,
                },
            },
        );
    }
};

const getA11yRecommendedFromPlugin = (): Config[] => {
    const recommended = angularPlugin.configs.templateAccessibility.find(i => i.name === 'angular-eslint/template-accessibility');
    if (!recommended) {
        throw new Error('Plugin `angular-eslint/template-ccessibility` no more compatible');
    }
    return [recommended as Config];
};

const createA11yRecommended = (options?: CreateOptions | false): Config[] => {
    if (options === false) {
        return defineConfig({
            name: '@hug-eslint-config/angular/accessibility (disabled)',
        });
    } else if (!isPackageInstalled('@angular/core')) {
        return defineConfig({
            name: '@hug-eslint-config/angular/accessibility (not applicable)',
        });
    } else {
        return defineConfig(
            getA11yRecommendedFromPlugin().map(config => {
                config.files = options?.files ?? Files.ANGULAR_HTML;
                return config;
            }),
            ...(options?.rules ? [{
                name: '@hug-eslint-config/angular/accessibility/recommended',
                files: options.files ?? Files.ANGULAR_HTML,
                rules: options.rules,
            }] : []),
        );
    }
};

const createA11yModerate = (options?: CreateOptions | false): Config[] => {
    if (options === false) {
        return defineConfig({
            name: '@hug-eslint-config/angular/accessibility (disabled)',
        });
    } else if (!isPackageInstalled('@angular/core')) {
        return defineConfig({
            name: '@hug-eslint-config/angular/accessibility (not applicable)',
        });
    } else {
        return defineConfig(
            createA11yRecommended(),
            {
                name: '@hug-eslint-config/angular/accessibility/moderate',
                files: options?.files ?? Files.ANGULAR_HTML,
                rules: {
                    // Ensure that the click event is accompanied with at least one key event keyup, keydown or keypress.
                    '@angular-eslint/template/click-events-have-key-events': 'off',

                    ...options?.rules,
                },
            },
        );
    }
};

export default {
    ts: {
        recommended: createTsRecommended(),
        createRecommended: createTsRecommended,
        moderate: createTsModerate(),
        createModerate: createTsModerate,
    },
    html: {
        recommended: createHtmlRecommended(),
        createRecommended: createHtmlRecommended,
    },
    accessibility: {
        recommended: createA11yRecommended(),
        createRecommended: createA11yRecommended,
        moderate: createA11yModerate(),
        createModerate: createA11yModerate,
    },
} satisfies Configs['configs']['angular'];
